import { ServerHealthAppPage } from './app.po';

describe('server-health-app App', () => {
  let page: ServerHealthAppPage;

  beforeEach(() => {
    page = new ServerHealthAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
