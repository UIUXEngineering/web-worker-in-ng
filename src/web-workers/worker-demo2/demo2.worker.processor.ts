console.log('Web Worker TWO Loaded.');
import * as _ from 'lodash';

const data: any[] = [ 1, 2, 3, 4, 5 ];

export function workerProcessor( event: any, done: Function ) {
  console.log('Web Worker TWO: Message received from main script');
  console.log('Web Worker TWO: Posting message back to main script');

  _.each(data, ( item ) => {
    const workerResult: string = 'Result: ' + event.data + ' iteration ' + item + ' with imported lodash.';
    done(workerResult);
  });

}
