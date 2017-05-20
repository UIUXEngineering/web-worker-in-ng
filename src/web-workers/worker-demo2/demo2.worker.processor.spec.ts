import { workerProcessor } from './demo2.worker.processor';

describe('demo2.worker.', () => {

  let workerResult: any[];

  beforeEach(() => {
    workerResult = [];
  });

  afterEach(() => {
    workerResult = null;
  });


  it('should postMessage an array', () => {
    workerProcessor({ data: 'FOO' }, ( _workerResult: any ) => {
      workerResult.push(_workerResult);
    });
    expect(workerResult.length).toBe(5);
  });

  it('should postMessage a string item', () => {
    workerProcessor({ data: 'BAR' }, ( _workerResult: any ) => {
      workerResult.push(_workerResult);
    });
    expect(workerResult[4]).toBe('Result: BAR iteration 5 with imported lodash.');
  });


});
