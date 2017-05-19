/* SystemJS module definition */
declare var module: NodeModule;
interface NodeModule {
  id: string;
}

declare module 'worker-loader!*' {
  const content: any;
  export = content;
}
