// module.exports.firsthandler = async (event) => {
//   message = "This is get function!!!!!!!";
//   //   console.log("event body---------", event.body);
//   //   console.log("result from console log", event);
//   //   console.log("message:::::", message);
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: message,
//       },
//       null,
//       2
//     ),
//   };
// };

// module.exports.secondhandler = async (event) => {
//   //   console.log("event body---------", event.body);
//   //   console.log("result from console log", event);

//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: "testttttt",
//       },
//       null,
//       2
//     ),
//   };
// };

const express = require("express");

const app = express();
const PORT = 3000;

// Define a route handler for the root path
app.get("/", (req, res) => {
  res.send("Hello, world!");
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = server; // Export the server instance
