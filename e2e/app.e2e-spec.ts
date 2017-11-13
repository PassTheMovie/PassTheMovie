import { TvPage } from './app.po';

describe('tv App', () => {
  let page: TvPage;

  beforeEach(() => {
    page = new TvPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
