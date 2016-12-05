import { WebCA2Page } from './app.po';

describe('web-ca2 App', function() {
  let page: WebCA2Page;

  beforeEach(() => {
    page = new WebCA2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
