import { TreinamentoPage } from './app.po';

describe('treinamento App', function() {
  let page: TreinamentoPage;

  beforeEach(() => {
    page = new TreinamentoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
