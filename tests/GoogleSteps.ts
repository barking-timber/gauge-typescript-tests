import { Step } from "gauge-ts";
import { goto, into, press, text, textBox, write } from 'taiko';
import assert = require("assert");

export default class GoogleSteps {

  @Step("Navigate to <envVar>")
  public async openUrlFromEnvVars(envVar: string) {
      const url = process.env[envVar];
      await goto(url);
  }

  @Step("When I type <searchText> in Google")
  public async searchInGoogle(searchText: string) {
      await write(searchText, into(textBox({
        type: "input",
        title: "Search"
      })));
      await press('Enter');
  }

  @Step("Then I see <expectedText> in Google Search")
  public async checkGoogleSearchResult(expectedText: string) {
      assert.ok(await text(expectedText).exists());
  }

}