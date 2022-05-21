const ExplorerController = require("./../../lib/controllers/ExplorerController");

describe("Test class ExplorerController", () => {
    test("Testing the getExplorerByMission method", () => {
        const explorerMission = ExplorerController.getExplorerByMission("node");
        expect(explorerMission).not.toBeUndefined();
        expect(explorerMission).toStrictEqual([
            {
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
            },
            {
                "name": "Woopa3",
                "githubUsername": "ajolonauta3",
                "score": 3,
                "mission": "node",
                "stacks": [
                    "elixir",
                    "groovy",
                    "reasonML"
                ]
            },
            {
                "name": "Woopa4",
                "githubUsername": "ajolonauta4",
                "mission": "node",
                "score": 4,
                "stacks": [
                    "javascript"
                ]
            },
            {
                "name": "Woopa5",
                "githubUsername": "ajolonauta5",
                "score": 5,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "elm"
                ]
            },
            {
                "name": "Woopa11",
                "githubUsername": "ajolonauta11",
                "score": 11,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa12",
                "githubUsername": "ajolonauta12",
                "score": 12,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa13",
                "githubUsername": "ajolonauta13",
                "score": 13,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa14",
                "githubUsername": "ajolonauta14",
                "score": 14,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            },
            {
                "name": "Woopa15",
                "githubUsername": "ajolonauta15",
                "score": 15,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "elixir",
                    "groovy",
                    "reasonML",
                    "elm"
                ]
            }
        ]);
    });

    test("Testing the getExplorersUsernamesByMission method", () => {
        const usernamesMission = ExplorerController.getExplorersUsernameByMission("node");
        expect(usernamesMission).toStrictEqual([
            "ajolonauta1", 
            "ajolonauta2", 
            "ajolonauta3", 
            "ajolonauta4", 
            "ajolonauta5", 
            "ajolonauta11", 
            "ajolonauta12", 
            "ajolonauta13", 
            "ajolonauta14", 
            "ajolonauta15"
        ]);
    });

    test("Testing the getExplorersAmonutByMission method", () => {
        const amountExplorersNode = ExplorerController.getExplorersAmountByMission("node");
        const amountExplorersJava = ExplorerController.getExplorersAmountByMission("java");
        expect(amountExplorersNode).toBe(10);
        expect(amountExplorersJava).toBe(5);
    });

    test("Testing applyValidationInNumber method in the controller", () => {
        const test3 = ExplorerController.getValueOfNumber(3);
        const test5 = ExplorerController.getValueOfNumber(5);
        const test15 = ExplorerController.getValueOfNumber(15);

        expect(test3).toBe("FIZZ");
        expect(test5).toBe("BUZZ");
        expect(test15).toBe("FIZZBUZZ");
    });
});