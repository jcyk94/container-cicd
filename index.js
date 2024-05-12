module.exports.firsthandler = async (event) => {
  message = "This is get function!!!!!!!";
  //   console.log("event body---------", event.body);
  //   console.log("result from console log", event);
  //   console.log("message:::::", message);
  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: message,
      },
      null,
      2
    ),
  };
};

module.exports.secondhandler = async (event) => {
  //   console.log("event body---------", event.body);
  //   console.log("result from console log", event);

  return {
    statusCode: 200,
    body: JSON.stringify(
      {
        message: "testttttt",
      },
      null,
      2
    ),
  };
};
