console.log('Web Worker TWO Loaded.');
import * as _ from 'lodash';
import { someDependency } from './someDependency';

const customPostMessage: any = postMessage;
const data: any[] = [1, 2, 3, 4, 5];

onmessage = function(event) {
  console.log('Web Worker TWO: Message received from main script');
  console.log('Web Worker TWO: Posting message back to main script');

  _.each(data, (item) => {
    const workerResult: string =  'Result: ' + event.data + ' with ' + someDependency + ' iterated ' + item;
    customPostMessage(workerResult);
  });
};
