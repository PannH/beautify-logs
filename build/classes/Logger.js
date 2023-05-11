"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const templates_1 = __importDefault(require("../templates"));
const util_1 = require("util");
const formatMessage_1 = __importDefault(require("../functions/formatMessage"));
class Logger {
    _options;
    _templates;
    constructor(options) {
        this._options = {
            format: options?.format ?? 0,
            splitMessages: options?.splitMessages ?? false,
            formatMessages: options?.formatMessages === undefined ? true : options.formatMessages
        };
        this._templates = templates_1.default;
        if (!this._templates[this._options.format])
            throw new Error(`The format ${this._options.format} does not exist`);
    }
    _log(level, messages) {
        messages = messages.map((message) => (typeof message === 'string'
            ? this._options.formatMessages
                ? (0, formatMessage_1.default)(message)
                : message
            : (0, util_1.inspect)(message, {
                colors: true,
                depth: Infinity
            })));
        const template = this._templates[this._options.format][level];
        if (this._options.splitMessages) {
            for (const message of messages) {
                const logMessage = template(message);
                console.log(logMessage);
            }
        }
        else {
            const logMessage = template(messages.join(' '));
            console.log(logMessage);
        }
    }
    debug(...messages) {
        this._log('debug', messages);
    }
    info(...messages) {
        this._log('info', messages);
    }
    warn(...messages) {
        this._log('warn', messages);
    }
    error(...messages) {
        this._log('error', messages);
    }
    fatal(...messages) {
        this._log('fatal', messages);
    }
}
exports.default = Logger;
