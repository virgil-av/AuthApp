import { App7Page } from './app.po';

describe('app-7 App', function() {
  let page: App7Page;

  beforeEach(() => {
    page = new App7Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
