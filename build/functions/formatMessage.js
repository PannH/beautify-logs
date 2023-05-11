"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
function formatMessage(message) {
    const modifiers = [{
            regex: /\*\*\s?([^\n]+)\*\*/g,
            modify: chalk_1.default.bold,
            regexToRemove: /\*\*/g
        }, {
            regex: /\*\s?([^\n]+)\*/g,
            modify: chalk_1.default.italic,
            regexToRemove: /\*/g
        }, {
            regex: /\_\_\s?([^\n]+)\_\_/g,
            modify: chalk_1.default.underline,
            regexToRemove: /\_\_/g
        }, {
            regex: /\~\~\s?([^\n]+)\~\~/g,
            modify: chalk_1.default.strikethrough,
            regexToRemove: /\~\~/g
        }, {
            regex: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
            modify: chalk_1.default.underline.blueBright,
            regexToRemove: null
        }];
    for (const modifier of modifiers) {
        const modifiableParts = message.match(modifier.regex) ?? [];
        for (let part of modifiableParts) {
            part = part.replace(modifier.regexToRemove, '');
            message = message.replace(modifier.regex, modifier.modify(part));
        }
    }
    return message;
}
exports.default = formatMessage;
