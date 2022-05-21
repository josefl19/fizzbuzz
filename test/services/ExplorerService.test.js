const Reader = require("./../../lib/utils/Reader");
const ExplorerService = require("./../../lib/services/ExplorerService");

const explorers = Reader.readJsonFile("./test/data/test_explorers.json");

describe("Testing of ExplorerService class", () => {
    test("1) Get explorers filter by mission", () => {
        const explorersNode = ExplorerService.filterByMission(explorers, "node");
        expect(explorersNode).not.toBeUndefined();
        expect(explorersNode).toStrictEqual([{
            "name": "Woopa1",
            "githubUsername": "ajolonauta1",
            "score": 1,
            "mission": "node",
            "stacks": [
                "javascript",
                "reasonML",
                "elm"
            ]
        },
        {
            "name": "Woopa2",
            "githubUsername": "ajolonauta2",
            "score": 2,
            "mission": "node",
            "stacks": [
                "javascript",
                "groovy",
                "elm"
            ]
        }]);
    });

    test("2) Get ammout of explorers in a mission", () => {
        const numExplorersNode = ExplorerService.getAmountOfExplorersByMission(explorers, "node");
        const numExplorersJava = ExplorerService.getAmountOfExplorersByMission(explorers, "java");
        expect(numExplorersNode).toBe(2);
        expect(numExplorersJava).toBe(1);
    });

    test("3) Get explorers username by mission", () => {
        const usernamesNode = ExplorerService.getExplorersUsernamesByMission(explorers, "node");
        expect(usernamesNode).toStrictEqual([ "ajolonauta1", "ajolonauta2" ]);
    });
});