const Reader = require('./../../lib/utils/Reader');

describe("Unit test for Reader class", () => {
    test('Reader a file', () => {
        const explorers = Reader.readJsonFile('test/data/test_explorers.json');
        expect(explorers).not.toBeUndefined();
    });
});