let tableData = require("../data/table-data");
let waitingListData = require("../data/waitinglist-data");

module.exports = (app) => {
  app.get("/api/tables", (req, res) => {
    res.json(tableData);
  });
  app.get("/api/waitlist", (req, res) => {
    res.json(waitingListData);
  });

  app.post("/api/tables", (req, res) => {
    if (tableData.length < 5) {
      tableData.push(req.body);
      res.json(true);
    } else {
      waitingListData.push(req.body);
      res.json(false);
    }
  });

  app.post("/api/clear", () => {
    tableData = [];
    waitingListData = [];
  });
};
