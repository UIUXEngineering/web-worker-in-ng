import { jasmineSpecWorkerAPI } from './demo2.worker';

describe('demo2.worker.', () => {

  let workerResult: any[];

  beforeEach(() => {
    workerResult = [];

    jasmineSpecWorkerAPI.postMessage(( _workerResult: any ) => {
      workerResult.push(_workerResult);
    });
  });

  afterEach(() => {
    workerResult = null;
  });


  it('should postMessage an array', () => {
    jasmineSpecWorkerAPI.onmessage({ data: 'FOO' });
    expect(workerResult.length).toBe(5);
  });

  it('should postMessage a string item', () => {
    jasmineSpecWorkerAPI.onmessage({ data: 'FOO' });
    expect(workerResult[4]).toBe('Result: FOO iteration 5 with imported lodash.');
  });


});
