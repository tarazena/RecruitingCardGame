import { RecruitingCardGamePage } from './app.po';

describe('recruiting-card-game App', () => {
  let page: RecruitingCardGamePage;

  beforeEach(() => {
    page = new RecruitingCardGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
