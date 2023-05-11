import templates from '../templates';
import { inspect } from 'util';
import formatMessage from '../functions/formatMessage';
import type { LoggerOptions } from '../types/LoggerOptions';
import type { LogLevel } from '../types/LogLevel';
import type { TemplateFunction } from '../types/TemplateFunction';

export default class Logger {

   private readonly _options: LoggerOptions;
   private readonly _templates: { [key: string]: TemplateFunction }[];

   constructor(options?: LoggerOptions) {

      this._options = {
         format: options?.format ?? 0,
         splitMessages: options?.splitMessages ?? false,
         formatMessages: options?.formatMessages === undefined ? true : options.formatMessages
      };

      this._templates = templates;

      if (!this._templates[this._options.format])
         throw new Error(`The format ${this._options.format} does not exist`);

   }

   private _log(level: LogLevel, messages: any[]): void {

      messages = messages.map((message) => (
         typeof message === 'string'
            ? this._options.formatMessages
               ? formatMessage(message)
               : message
            : inspect(message, {
               colors: true,
               depth: Infinity
            })
      ));

      const template = this._templates[this._options.format][level];

      if (this._options.splitMessages) {

         for (const message of messages) {

            const logMessage = template(message);

            console.log(logMessage);

         }

      } else {

         const logMessage = template(messages.join(' '));

         console.log(logMessage);

      }

   }

   public debug(...messages: any[]): void {

      this._log('debug', messages);

   }

   public info(...messages: any[]): void {

      this._log('info', messages);

   }

   public warn(...messages: any[]): void {

      this._log('warn', messages);

   }

   public error(...messages: any[]): void {

      this._log('error', messages);

   }

   public fatal(...messages: any[]): void {

      this._log('fatal', messages);

   }

}