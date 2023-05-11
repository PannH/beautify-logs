import type { LoggerOptions } from '../types/LoggerOptions';
export default class Logger {
    private readonly _options;
    private readonly _templates;
    constructor(options?: LoggerOptions);
    private _log;
    debug(...messages: any[]): void;
    info(...messages: any[]): void;
    warn(...messages: any[]): void;
    error(...messages: any[]): void;
    fatal(...messages: any[]): void;
}
