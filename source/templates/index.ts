import c from 'chalk';
import formatDate from '../functions/formatDate';

export default [
   {
      debug: (m: string) => `[${c.blue('DEBUG')}] ${m}`,
      info: (m: string) => `[${c.green('INFO')}] ${m}`,
      warn: (m: string) => `[${c.yellow('WARN')}] ${m}`,
      error: (m: string) => `[${c.red('ERROR')}] ${m}`,
      fatal: (m: string) => `[${c.redBright('FATAL')}] ${m}`
   },
   {
      debug: (m: string) => `[${c.blue('DEBUG')}](${c.dim(formatDate(new Date()))}) ${m}`,
      info: (m: string) => `[${c.green('INFO')}](${c.dim(formatDate(new Date()))}) ${m}`,
      warn: (m: string) => `[${c.yellow('WARN')}](${c.dim(formatDate(new Date()))}) ${m}`,
      error: (m: string) => `[${c.red('ERROR')}](${c.dim(formatDate(new Date()))}) ${m}`,
      fatal: (m: string) => `[${c.redBright('FATAL')}](${c.dim(formatDate(new Date()))}) ${m}`
   },
   {
      debug: (m: string) => `${c.blue('DEBUG')}: ${m}`,
      info: (m: string) => `${c.green('INFO')}: ${m}`,
      warn: (m: string) => `${c.yellow('WARN')}: ${m}`,
      error: (m: string) => `${c.red('ERROR')}: ${m}`,
      fatal: (m: string) => `${c.redBright('FATAL')}: ${m}`
   },
   {
      debug: (m: string) => `${c.blue('DEBUG')} ${c.italic.dim(formatDate(new Date()))}: ${m}`,
      info: (m: string) => `${c.green('INFO')} ${c.italic.dim(formatDate(new Date()))}: ${m}`,
      warn: (m: string) => `${c.yellow('WARN')} ${c.italic.dim(formatDate(new Date()))}: ${m}`,
      error: (m: string) => `${c.red('ERROR')} ${c.italic.dim(formatDate(new Date()))}: ${m}`,
      fatal: (m: string) => `${c.redBright('FATAL')} ${c.italic.dim(formatDate(new Date()))}: ${m}`
   },
   {
      debug: (m: string) => `${c.white.bgBlue(' DEBUG ')} ${m}`,
      info: (m: string) => `${c.white.bgGreen(' INFO ')} ${m}`,
      warn: (m: string) => `${c.white.bgYellow(' WARN ')} ${m}`,
      error: (m: string) => `${c.white.bgRed(' ERROR ')} ${m}`,
      fatal: (m: string) => `${c.white.bgRedBright(' FATAL ')} ${m}`
   },
   {
      debug: (m: string) => `${c.white.bgBlue(' DEBUG ')} ${c.italic.dim(formatDate(new Date()))}: ${m}`,
      info: (m: string) => `${c.white.bgGreen(' INFO ')} ${c.italic.dim(formatDate(new Date()))}: ${m}`,
      warn: (m: string) => `${c.white.bgYellow(' WARN ')} ${c.italic.dim(formatDate(new Date()))}: ${m}`,
      error: (m: string) => `${c.white.bgRed(' ERROR ')} ${c.italic.dim(formatDate(new Date()))}: ${m}`,
      fatal: (m: string) => `${c.white.bgRedBright(' FATAL ')} ${c.italic.dim(formatDate(new Date()))}: ${m}`
   },
   {
      debug: (m: string) => `${c.blue('DEBUG')} (${c.dim(formatDate(new Date()))})\n${c.dim('↳')} ${m}`,
      info: (m: string) => `${c.green('INFO')} (${c.dim(formatDate(new Date()))})\n${c.dim('↳')} ${m}`,
      warn: (m: string) => `${c.yellow('WARN')} (${c.dim(formatDate(new Date()))})\n${c.dim('↳')} ${m}`,
      error: (m: string) => `${c.red('ERROR')} (${c.dim(formatDate(new Date()))})\n${c.dim('↳')} ${m}`,
      fatal: (m: string) => `${c.redBright('FATAL')} (${c.dim(formatDate(new Date()))})\n${c.dim('↳')} ${m}`
   },
   {
      debug: (m: string) => `${c.blue('>')} ${m}`,
      info: (m: string) => `${c.green('?')} ${m}`,
      warn: (m: string) => `${c.yellow('!')} ${m}`,
      error: (m: string) => `${c.red('X')} ${m}`,
      fatal: (m: string) => `${c.redBright('!!')} ${m}`
   }
]