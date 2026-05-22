export declare class Configuration {
    basePath: string;
    defaultHeaders: Map<string, string>;
    userAgent: string;
    constructor(options?: {
        basePath?: string;
        defaultHeaders?: Record<string, string>;
        userAgent?: string;
    });
    addDefaultHeader(name: string, value: string): void;
}
export declare function NewConfiguration(): Configuration;
export declare const DefaultConfiguration: Configuration;
