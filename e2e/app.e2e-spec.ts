import { AngularRouteGuardsPage } from './app.po';

describe('angular-route-guards App', () => {
  let page: AngularRouteGuardsPage;

  beforeEach(() => {
    page = new AngularRouteGuardsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
