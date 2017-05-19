import { WebWorkerInNgPage } from './app.po';

describe('web-worker-in-ng App', () => {
  let page: WebWorkerInNgPage;

  beforeEach(() => {
    page = new WebWorkerInNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
