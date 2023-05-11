import c from 'chalk';

export default function formatMessage(message: string): string {

   const modifiers = [{
      regex: /\*\*\s?([^\n]+)\*\*/g,
      modify: c.bold,
      regexToRemove: /\*\*/g
   }, {
      regex: /\*\s?([^\n]+)\*/g,
      modify: c.italic,
      regexToRemove: /\*/g
   }, {
      regex: /\_\_\s?([^\n]+)\_\_/g,
      modify: c.underline,
      regexToRemove: /\_\_/g
   }, {
      regex: /\~\~\s?([^\n]+)\~\~/g,
      modify: c.strikethrough,
      regexToRemove: /\~\~/g
   }, {
      regex: /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
      modify: c.underline.blueBright,
      regexToRemove: null
   }];

   for (const modifier of modifiers) {

      const modifiableParts = message.match(modifier.regex) ?? [];

      for (let part of modifiableParts) {

         part = part.replace(modifier.regexToRemove, '')

         message = message.replace(modifier.regex, modifier.modify(part));

      }

   }

   return message;

}