import { AvsOauthClientPage } from './app.po';

describe('avs-oauth-client App', function() {
  let page: AvsOauthClientPage;

  beforeEach(() => {
    page = new AvsOauthClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
