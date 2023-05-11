"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const formatDate_1 = __importDefault(require("../functions/formatDate"));
exports.default = [
    {
        debug: (m) => `[${chalk_1.default.blue('DEBUG')}] ${m}`,
        info: (m) => `[${chalk_1.default.green('INFO')}] ${m}`,
        warn: (m) => `[${chalk_1.default.yellow('WARN')}] ${m}`,
        error: (m) => `[${chalk_1.default.red('ERROR')}] ${m}`,
        fatal: (m) => `[${chalk_1.default.redBright('FATAL')}] ${m}`
    },
    {
        debug: (m) => `[${chalk_1.default.blue('DEBUG')}](${chalk_1.default.dim((0, formatDate_1.default)(new Date()))}) ${m}`,
        info: (m) => `[${chalk_1.default.green('INFO')}](${chalk_1.default.dim((0, formatDate_1.default)(new Date()))}) ${m}`,
        warn: (m) => `[${chalk_1.default.yellow('WARN')}](${chalk_1.default.dim((0, formatDate_1.default)(new Date()))}) ${m}`,
        error: (m) => `[${chalk_1.default.red('ERROR')}](${chalk_1.default.dim((0, formatDate_1.default)(new Date()))}) ${m}`,
        fatal: (m) => `[${chalk_1.default.redBright('FATAL')}](${chalk_1.default.dim((0, formatDate_1.default)(new Date()))}) ${m}`
    },
    {
        debug: (m) => `${chalk_1.default.blue('DEBUG')}: ${m}`,
        info: (m) => `${chalk_1.default.green('INFO')}: ${m}`,
        warn: (m) => `${chalk_1.default.yellow('WARN')}: ${m}`,
        error: (m) => `${chalk_1.default.red('ERROR')}: ${m}`,
        fatal: (m) => `${chalk_1.default.redBright('FATAL')}: ${m}`
    },
    {
        debug: (m) => `${chalk_1.default.blue('DEBUG')} ${chalk_1.default.italic.dim((0, formatDate_1.default)(new Date()))}: ${m}`,
        info: (m) => `${chalk_1.default.green('INFO')} ${chalk_1.default.italic.dim((0, formatDate_1.default)(new Date()))}: ${m}`,
        warn: (m) => `${chalk_1.default.yellow('WARN')} ${chalk_1.default.italic.dim((0, formatDate_1.default)(new Date()))}: ${m}`,
        error: (m) => `${chalk_1.default.red('ERROR')} ${chalk_1.default.italic.dim((0, formatDate_1.default)(new Date()))}: ${m}`,
        fatal: (m) => `${chalk_1.default.redBright('FATAL')} ${chalk_1.default.italic.dim((0, formatDate_1.default)(new Date()))}: ${m}`
    },
    {
        debug: (m) => `${chalk_1.default.white.bgBlue(' DEBUG ')} ${m}`,
        info: (m) => `${chalk_1.default.white.bgGreen(' INFO ')} ${m}`,
        warn: (m) => `${chalk_1.default.white.bgYellow(' WARN ')} ${m}`,
        error: (m) => `${chalk_1.default.white.bgRed(' ERROR ')} ${m}`,
        fatal: (m) => `${chalk_1.default.white.bgRedBright(' FATAL ')} ${m}`
    },
    {
        debug: (m) => `${chalk_1.default.white.bgBlue(' DEBUG ')} ${chalk_1.default.italic.dim((0, formatDate_1.default)(new Date()))}: ${m}`,
        info: (m) => `${chalk_1.default.white.bgGreen(' INFO ')} ${chalk_1.default.italic.dim((0, formatDate_1.default)(new Date()))}: ${m}`,
        warn: (m) => `${chalk_1.default.white.bgYellow(' WARN ')} ${chalk_1.default.italic.dim((0, formatDate_1.default)(new Date()))}: ${m}`,
        error: (m) => `${chalk_1.default.white.bgRed(' ERROR ')} ${chalk_1.default.italic.dim((0, formatDate_1.default)(new Date()))}: ${m}`,
        fatal: (m) => `${chalk_1.default.white.bgRedBright(' FATAL ')} ${chalk_1.default.italic.dim((0, formatDate_1.default)(new Date()))}: ${m}`
    },
    {
        debug: (m) => `${chalk_1.default.blue('DEBUG')} (${chalk_1.default.dim((0, formatDate_1.default)(new Date()))})\n${chalk_1.default.dim('↳')} ${m}`,
        info: (m) => `${chalk_1.default.green('INFO')} (${chalk_1.default.dim((0, formatDate_1.default)(new Date()))})\n${chalk_1.default.dim('↳')} ${m}`,
        warn: (m) => `${chalk_1.default.yellow('WARN')} (${chalk_1.default.dim((0, formatDate_1.default)(new Date()))})\n${chalk_1.default.dim('↳')} ${m}`,
        error: (m) => `${chalk_1.default.red('ERROR')} (${chalk_1.default.dim((0, formatDate_1.default)(new Date()))})\n${chalk_1.default.dim('↳')} ${m}`,
        fatal: (m) => `${chalk_1.default.redBright('FATAL')} (${chalk_1.default.dim((0, formatDate_1.default)(new Date()))})\n${chalk_1.default.dim('↳')} ${m}`
    },
    {
        debug: (m) => `${chalk_1.default.blue('>')} ${m}`,
        info: (m) => `${chalk_1.default.green('?')} ${m}`,
        warn: (m) => `${chalk_1.default.yellow('!')} ${m}`,
        error: (m) => `${chalk_1.default.red('X')} ${m}`,
        fatal: (m) => `${chalk_1.default.redBright('!!')} ${m}`
    }
];
