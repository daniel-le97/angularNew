import { dev } from '../../../../env';

type LogType = 'log' | 'error' | 'warn' | 'assert' | 'trace';

function log(type: LogType, content: any) {
  if (dev) {
    console[type](
      `[${type}] :: ${new Date().toLocaleTimeString()} :: `,
      ...content
    );
  } else {
    switch (type) {
      case 'log':
      case 'assert':
        return;
    }
    // TODO SEND LOGS TO EXTERNAL SERVICE
    console[type](
      `[${type}] :: ${new Date().toLocaleTimeString()} :: `,
      ...content
    );
  }
}

export const logger = {
  log(...content: any[]) {
    log('log', content);
  },
  error(...content: any[]) {
    log('error', content);
  },
  warn(...content: any[]) {
    log('warn', content);
  },
  assert(...content: any[]) {
    log('assert', content);
  },
  trace(...content: any[]) {
    log('trace', content);
  },
};
