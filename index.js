const fetch = require("node-fetch");
const baseURL = "https://beat-api.herokuapp.com";
const isURL = require("is-absolute-url");

class API {
  constructor() {}

  /**
   * The main endpoint to make requests with
   * @param endpoint: The endpoint to make a request to
   * @param parameters: The parameters required for the endpoint
   * @private
   */
  async request(endpoint, parameters) {
    const data = await fetch(`${baseURL}/${endpoint}?${parameters}`);
    if (data.status !== 200) {
      const error = await data.json();
      throw new Error(
        `Error with /${endpoint} endpoint: ${error.message} (${error.code})`
      );
    }
    return data;
  }

  /**
   * emergencyMeeting endpoint
   * @param text: The text to put on the image
   * @returns: Promise<Buffer>
   */
  async emergency(text) {
    if (!text) throw new Error("text must be specified");
    const data = await this.request("emergencyMeeting", `text=${text}`);
    return data.buffer();
  }

  /**
   * weather endpoint
   * @param city: The city to get the weather of
   * @returns: Promise<Object>
   */
  async weather(city) {
    if (!city) throw new Error("city must be specified");
    const data = await this.request("weather", `city=${city}`);
    const json = await data.json();
    return json;
  }

  /**
   * shorten endpoint
   * @param url: The url to shorten
   * @returns: Promise<Object>
   */
  async shorten(url) {
    if (!url) throw new Error("url must be specified");
    if (!isURL(url))
      throw new Error(
        "URLs must start with https:// (Check #1 on github issues)"
      );
    const data = await this.request("shorten", `url=${url}`);
    const json = await data.json();
    return json;
  }

  /**
   * cat endpoint
   * @returns: Promise<Buffer>
   */
  async cat() {
    const data = await this.request("cat");
    const json = await data.json();
    return json;
  }

  /**
   * dog endpoint
   * @returns: Promise<Buffer>
   */
  async dog() {
    const data = await this.request("dog");
    const json = await data.json();
    return json;
  }

  /**
   * roast endpoint
   * @returns Promise<Object>
   */
  async roast() {
    const data = await this.request("roast");
    const json = await data.json();
    return json;
  }
}

module.exports = API;
