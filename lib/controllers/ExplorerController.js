const Reader = require("./../utils/Reader");
const ExplorerService = require("./../services/ExplorerService");
const FizzbuzzService = require("./../services/FizzbuzzService");

const TelegramBot = require("node-telegram-bot-api");
require("dotenv").config();

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

    static validateBotTelegram() {
        const token = process.env.TOKEN_BOT;
        const bot = new TelegramBot(token, {polling: true});

        bot.onText(/\/echo (.+)/, (msg, match) => {
            const chatId = msg.chat.id;
            const resp = match[1];
            bot.sendMessage(chatId, resp);
        });
        
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
        
            if(!isNaN(parseInt(msg.text))){
                const fizzbuzzTrick = ExplorerController.getValueOfNumber(msg.text);
                const responseBot = `Tu número es: ${msg.text}. Validación: ${fizzbuzzTrick}\n\nIngresa otro número o una misión (node o java)`;
                bot.sendMessage(chatId, responseBot);
            } else if(msg.text === "node" || msg.text === "java") {
                const explorersMission = ExplorerController.getExplorerByMission(msg.text);
                const namesUsers = explorersMission.map((explorer) => explorer.name);
                const responseBot = `Los explorers de la misión ${msg.text} son: ${namesUsers}\n\nIngresa otro número o una misión (node o java)`;
                bot.sendMessage(chatId, responseBot);
            } else {
                bot.sendMessage(chatId, "Envía un número o una misión válida");
            }
        });
    }
}

module.exports = ExplorerController;