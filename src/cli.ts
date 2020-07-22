import path from 'path'
import yargs from 'yargs'
import { check } from './check'

// eslint-disable-next-line no-unused-expressions
yargs
  .scriptName('taze')
  .usage('$0 [args]')
  .command(
    '*',
    'check npm version update',
    {
      path: {
        alias: 'p',
        default: path.resolve('.'),
        coerce: (p: string) => path.resolve(p),
      },
      recursive: {
        alias: 'r',
        default: false,
        boolean: true,
      },
      range: {
        default: 'major',
        string: true,
      },
      write: {
        alias: 'w',
        default: false,
        boolean: true,
      },
    },
    async(args) => {
      return await check(args)
    },
  )
  .help()
  .argv
