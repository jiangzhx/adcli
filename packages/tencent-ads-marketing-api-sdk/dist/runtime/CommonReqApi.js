import { ApiClient } from "./ApiClient.js";
export class CommonReqApi {
    apiClient;
    constructor(apiClient = new ApiClient()) {
        this.apiClient = apiClient;
    }
    async commonReq(path, method, options = {}) {
        const response = await this.commonReqWithHttpInfo(path, method, options);
        return response.data;
    }
    async commonReqWithHttpInfo(path, method, options = {}) {
        return this.apiClient.requestWithHttpInfo({
            path,
            method,
            queryParams: Object.entries(options.queryParams ?? {}).map(([name, value]) => ({ name, value })),
            body: options.body,
            formParams: options.formParams,
            files: options.files,
            contentType: options.contentType,
        });
    }
}
