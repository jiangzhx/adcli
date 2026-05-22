export class ApiException extends Error {
    statusCode;
    responseBody;
    headers;
    constructor(message, options = {}) {
        super(message);
        this.name = "ApiException";
        this.statusCode = options.statusCode;
        this.responseBody = options.responseBody;
        this.headers = options.headers;
    }
}
