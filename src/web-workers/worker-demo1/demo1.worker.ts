console.log('Web Worker ONE Loaded.');

// prevent TypeScript compile error
const customPostMessage: any = postMessage;

// Jasmine API
// The postMessage method has a different signature
// in the browser than in a worker.
// Supply a custom postMessage callback method to
// prevent TypeScript data type errors.
let jasmineSpecPostMessageCallback: any = null;
let jasmineSpecIsInBrowser: boolean;
try {
  jasmineSpecIsInBrowser = ( window !== undefined );
} catch (e) {
  jasmineSpecIsInBrowser = false; // We are a web worker!
}


// Worker API
onmessage = function ( event ) {

  // worker data process
  console.log('Web Worker ONE: Message received from main script');
  console.log('Web Worker ONE: Posting message back to main script');
  const workerResult = 'Result: ' + event.data + ' in Worker';

  if (jasmineSpecIsInBrowser) { // For jasmine tests running in browser
    if (!jasmineSpecPostMessageCallback) {
      throw Error('Need postMessage callback to run jasmine specs');
    } else {
      jasmineSpecPostMessageCallback(workerResult);
    }
  } else { // running in worker
    customPostMessage(workerResult);
  }

};

// Jasmine API
export const jasmineSpecWorkerAPI: any = {
  onmessage: onmessage,
  postMessage: ( cb: any ) => {
    jasmineSpecPostMessageCallback = cb;
  }
};
