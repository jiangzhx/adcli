// Generated from oceanengine/ad_open_sdk_go config/configuration.go
// Do not edit manually.

export class Configuration {
  host = "api.oceanengine.com";
  scheme = "https";
  defaultHeaders = new Map<string, string>();
  userAgent = "Bytedance Ads Openapi SDK";
  debug = false;
  logEnable = false;
  useLogMw = true;

  constructor(
    options: {
      host?: string;
      scheme?: string;
      defaultHeaders?: Record<string, string>;
      userAgent?: string;
      debug?: boolean;
      logEnable?: boolean;
      useLogMw?: boolean;
    } = {},
  ) {
    if (options.host) {
      this.host = options.host;
    }
    if (options.scheme) {
      this.scheme = options.scheme;
    }
    if (options.userAgent) {
      this.userAgent = options.userAgent;
    }
    if (options.debug != null) {
      this.debug = options.debug;
    }
    if (options.logEnable != null) {
      this.logEnable = options.logEnable;
    }
    if (options.useLogMw != null) {
      this.useLogMw = options.useLogMw;
    }
    for (const [name, value] of Object.entries(options.defaultHeaders ?? {})) {
      this.defaultHeaders.set(name, value);
    }
  }

  addDefaultHeader(name: string, value: string) {
    this.defaultHeaders.set(name, value);
  }

  getBasePath() {
    return `${this.scheme}://${this.host}`;
  }
}

export function NewConfiguration() {
  return new Configuration();
}

export const DefaultConfiguration = NewConfiguration();
