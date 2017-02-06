import {binding, given, then, when} from 'cucumber-tsflow';
import {browser, element, by} from 'protractor';

@binding()
export default class SearchSteps {
  @given(/^I am on the search page$/)
  public GivenXXX (callback): void {
    // Write code here that turns the phrase above into concrete actions
    browser.get('search');
    browser.waitForAngular('waiting for search page to load').then(callback);
  }

  @when(/^I fill the search input$/)
  public WhenXXX (callback): void {
    // Write code here that turns the phrase above into concrete actions
    element(by.css('md-input-element')).sendKeys('angular');
  }

  @then(/^I should see the results of my search$/)
  public ThenXXX (callback): void {
    // Write code here that turns the phrase above into concrete actions
    callback.pending();
  }


}

