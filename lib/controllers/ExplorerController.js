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

    static getResultBotTelegram() {
        const token = process.env.TOKEN_BOT;
        const bot = new TelegramBot(token, {polling: true});

        bot.onText(/\/echo (.+)/, (msg, match) => {
            // 'msg' is the received Message from Telegram
            // 'match' is the result of executing the regexp above on the text content
            // of the message
        
            const chatId = msg.chat.id;
            const resp = match[1]; // the captured "whatever"
        
            // send back the matched "whatever" to the chat
            bot.sendMessage(chatId, resp);
        });
        
        // Listen for any kind of message. There are different kinds of
        // messages.
        bot.on("message", (msg) => {
            const chatId = msg.chat.id;
            const numberToApplyFb = parseInt(msg.text);
        
            if(!isNaN(numberToApplyFb)){
                const fizzbuzzTrick = ExplorerController.getValueOfNumber(numberToApplyFb);
                const responseBot = `Tu número es: ${numberToApplyFb}. Validación: ${fizzbuzzTrick}`;
                bot.sendMessage(chatId, responseBot);
            } else {
                bot.sendMessage(chatId, "Envía un número válido");
            }
        
        });
    }
}

module.exports = ExplorerController;