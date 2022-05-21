const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

class ExplorerController {
    static getExplorerByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersByMission = ExplorerService.filterByMission(explorers, mission);
        return explorersByMission;
    }

    static getExplorersUsernameByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersUsernamesByMission = ExplorerService.getExplorersUsernamesByMission(explorers, mission);
        return explorersUsernamesByMission;
    }

    static getExplorersAmountByMission(mission) {
        const explorers = Reader.readJsonFile("explorers.json");
        const explorersAmountByMission = ExplorerService.getAmountOfExplorersByMission(explorers, mission);
        return explorersAmountByMission;
    }

    static getValueOfNumber(number) {
        const result = FizzbuzzService.applyValidationInNumber(number);
        return result;
    }
}

module.exports = ExplorerController;