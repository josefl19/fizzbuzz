const Reader = require("./../../lib/utils/Reader");
const FizzbuzzService = require("./../../lib/services/FizzbuzzService");

const explorers = Reader.readJsonFile("./test/data/test_explorers.json");

describe("Testing the class FizzbuzzService", () => {
    test("Simple validations", () => {
        const explorer1 = {name: "Explorer1", score: 1};
        const valExplorer1 = FizzbuzzService.applyValidationInExplorer(explorer1);
        expect(valExplorer1).toStrictEqual({"name": "Explorer1", "score": 1, "trick": 1});

        const explorer3 = {name: "Explorer3", score: 3};
        const valExplorer3 = FizzbuzzService.applyValidationInExplorer(explorer3);
        expect(valExplorer3).toStrictEqual({"name": "Explorer3", "score": 3, "trick": "FIZZ"});

        const explorer5 = {name: "Explorer5", score: 5};
        const valExplorer5 = FizzbuzzService.applyValidationInExplorer(explorer5);
        expect(valExplorer5).toStrictEqual({"name": "Explorer5", "score": 5, "trick": "BUZZ"});
        
        const explorer15 = {name: "Explorer15", score: 15};
        const valExplorer15 = FizzbuzzService.applyValidationInExplorer(explorer15);
        FizzbuzzService.applyValidationInExplorer(explorer15);
        expect(valExplorer15).toStrictEqual({"name": "Explorer15", "score": 15, "trick": "FIZZBUZZ"});
    });

    test("Validation using file json", () => {
        const explorersVal = explorers.map((exp) => {
            return FizzbuzzService.applyValidationInExplorer(exp);
        });

        expect(explorersVal).toStrictEqual([
            {
                "name": "Woopa1",
                "githubUsername": "ajolonauta1",
                "score": 1,
                "mission": "node",
                "stacks": [
                    "javascript",
                    "reasonML",
                    "elm"
                ],
                "trick": 1
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
                ],
                "trick": 2
            },
            {
                "name": "Woopa6",
                "githubUsername": "ajolonauta6",
                "score": 6,
                "mission": "java",
                "stacks": [
                    "elm"
                ],
                "trick": "FIZZ"
            }
        ]);
    });

    test("Validation with a number", () => {
        const test3 = FizzbuzzService.applyValidationInNumber(3);
        const test5 = FizzbuzzService.applyValidationInNumber(5);
        const test15 = FizzbuzzService.applyValidationInNumber(15);

        expect(test3).toBe("FIZZ");
        expect(test5).toBe("BUZZ");
        expect(test15).toBe("FIZZBUZZ"); 
    });
});