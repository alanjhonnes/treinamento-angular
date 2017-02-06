import {browser, element, by} from 'protractor';
import {binding, given, then, when} from "cucumber-tsflow";

@binding()
class ArithmeticSteps {
  private variable: number;

  @given(/^a variable set to (\d+)$/)
  public aVariableSetTo(num: string): void {
    this.variable = parseInt(num);
  }

  @when(/^I increment the variable by (\d+)$/)
  public iIncrementTheVariableBy(num: string): void {
    this.variable += parseInt(num);
  }

  @then(/^the variable should contain (\d+)$/)
  public theVariableShouldContain(expectedResult: string): void {
    if (parseInt(expectedResult) !== this.variable) {
      throw new Error("Arithmetic Error");
    }
  }
}

export = ArithmeticSteps;