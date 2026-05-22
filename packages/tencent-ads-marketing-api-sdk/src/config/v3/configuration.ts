// Generated from tencentad/marketing-api-go-sdk pkg/config/v3/configuration.go
// Do not edit manually.

export class Configuration {
  basePath = "https://api.e.qq.com/v3.0";
  defaultHeaders = new Map<string, string>();
  userAgent = "Tencent Ads Marketing API SDK";

  constructor(options: { basePath?: string; defaultHeaders?: Record<string, string>; userAgent?: string } = {}) {
    if (options.basePath) {
      this.basePath = options.basePath;
    }
    if (options.userAgent) {
      this.userAgent = options.userAgent;
    }
    for (const [name, value] of Object.entries(options.defaultHeaders ?? {})) {
      this.defaultHeaders.set(name, value);
    }
  }

  addDefaultHeader(name: string, value: string) {
    this.defaultHeaders.set(name, value);
  }
}

export function NewConfiguration() {
  return new Configuration();
}

export const DefaultConfiguration = NewConfiguration();
