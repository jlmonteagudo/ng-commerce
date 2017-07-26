import { NgCommercePage } from './app.po';

describe('ng-commerce App', () => {
  let page: NgCommercePage;

  beforeEach(() => {
    page = new NgCommercePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
