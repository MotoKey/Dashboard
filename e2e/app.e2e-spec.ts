import { MotoKeyPage } from './app.po';

describe('moto-key App', function() {
  let page: MotoKeyPage;

  beforeEach(() => {
    page = new MotoKeyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
