import { jasmineSpecWorkerAPI } from './demo1.worker';

describe('demo1.worker.', () => {

  let workerResult: any = null;

  jasmineSpecWorkerAPI.postMessage(( _workerResult: any ) => {
    workerResult = _workerResult;
  });

  afterEach(() => {
    workerResult = null;
  });


  it('should postMessage a result', () => {

    jasmineSpecWorkerAPI.onmessage({ data: 'FOO' });
    expect(workerResult).toBe('Result: FOO in Worker');

  });


});
