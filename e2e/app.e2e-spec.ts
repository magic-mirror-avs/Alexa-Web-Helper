import { AlexaWebHelperPage } from './app.po';

describe('alexa-web-helper App', () => {
  let page: AlexaWebHelperPage;

  beforeEach(() => {
    page = new AlexaWebHelperPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
