const ExplorerController = require("./lib/controllers/ExplorerController");
const express = require("express");
const app = express();
app.use(express.json());
const port = 3000;

app.get("/", (request, response) => {
    response.json({message: "FizzBuzz Api welcome!"});
});

app.get("/v1/explorers/:mission", (request, response) => {
    response.json(ExplorerController.getExplorerByMission(request.params.mission));
});

app.get("/v1/explorers/amount/:mission", (req, res) => {
    res.json(ExplorerController.getExplorersAmountByMission(req.params.mission));
});

app.get("/v1/explorers/usernames/:mission", (req, res) => {
    res.json(ExplorerController.getExplorersUsernameByMission(req.params.mission));
});

app.get("/v1/fizzbuzz/:score", (req, res) => {
    const score = req.params.score;
    res.json({"score": score, "trick": ExplorerController.getValueOfNumber(score)});
});

app.listen(port, () => {
    console.log(`FizzBuzz API in localhost:${port}`);
});