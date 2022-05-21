class ExplorerService {
    static filterByMission(explorers, mission) {
        return explorers.filter((explorer) => explorer.mission == mission);
    } 
    
    static getAmountOfExplorersByMission(explorers, mission) {
        const explorersInMission = explorers.filter((explorer) => explorer.mission == mission);
        return explorersInMission.length;
    } 
    
    static getExplorersUsernamesByMission(explorers, mission) {
        const explorersInMissionToGetUsernames = explorers.filter((explorer) => explorer.mission == mission);
        const usernamesInMission = explorersInMissionToGetUsernames.map((explorer) => explorer.githubUsername);

        return usernamesInMission;
    }
}

module.exports = ExplorerService;