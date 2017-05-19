console.log('Web Worker ONE Loaded.');

// prevent TypeScript errors
const customPostMessage: any = postMessage;

onmessage = function(event) {
  console.log('Web Worker ONE: Message received from main script');
  console.log('Web Worker ONE: Posting message back to main script');
  const workerResult = 'Result: ' + event.data + ' in Worker';
  customPostMessage(workerResult);
};
