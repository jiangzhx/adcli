export declare class ApiException extends Error {
    readonly statusCode?: number;
    readonly responseBody?: unknown;
    readonly headers?: Headers;
    constructor(message: string, options?: {
        statusCode?: number;
        responseBody?: unknown;
        headers?: Headers;
    });
}
