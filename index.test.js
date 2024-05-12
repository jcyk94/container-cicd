const functions = require("./index");

// const { firsthandler } = require("./index");

describe("test-no.1", () => {
  it("should return status code 200 and the correct message", async () => {
    const event = {};
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "This is get function!!!!!!!",
        },
        null,
        2
      ),
    };
    const result = await functions.firsthandler(event);
    expect(result).toEqual(expectedResponse);
  });
});

describe("test-no.2", () => {
  it("another test to ttest", async () => {
    const event = {};
    const expectedResponse = {
      statusCode: 200,
      body: JSON.stringify(
        {
          message: "testttttt",
        },
        null,
        2
      ),
    };
    const result = await functions.secondhandler(event);
    expect(result).toEqual(expectedResponse);
  });
});
