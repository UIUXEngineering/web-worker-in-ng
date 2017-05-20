/**
 * Worker processing code is externalized
 * so only see the Worker API in this file.
 */
import { workerProcessor } from './demo2.worker.processor';

// prevent TypeScript compile error
const customPostMessage: any = postMessage;

// Jasmine API
// The postMessage method has a different signature
// in the browser than in a worker.
// Supply a custom postMessage callback method to
// prevent TypeScript data type errors.
let jasmineSpecPostMessageCallback: any = null;
let jasmineSpecIsInBrowser: boolean;

// Strange try / catch couple with boolean logic is to
// suppress errors in both teh worker and browser contexts.
// Worker throws an error for window being undefined.
// TypeScript throws errors for compiling worker.
try {
  jasmineSpecIsInBrowser = ( window !== undefined );
} catch (e) {
  jasmineSpecIsInBrowser = false; // We are a web worker!
}

// Worker API
onmessage = function ( event: any ) {

  workerProcessor(event, ( _result: any ) => {

    const result: string = ( typeof _result !== 'string') ? JSON.stringify(_result) : _result;

    if (jasmineSpecIsInBrowser) { // For jasmine tests running in browser
      if (!jasmineSpecPostMessageCallback) {
        throw Error('Need postMessage callback to run jasmine specs');
      } else {
        jasmineSpecPostMessageCallback(result);
      }
    } else { // running in worker
      customPostMessage(result);
    }
  });

};

// Jasmine Spec API
export const jasmineSpecWorkerAPI: any = {
  onmessage: onmessage,
  postMessage: ( cb: any ) => {
    jasmineSpecPostMessageCallback = cb;
  }
};
