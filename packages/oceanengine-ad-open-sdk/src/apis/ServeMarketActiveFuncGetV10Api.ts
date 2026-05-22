// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ServeMarketActiveFuncGetV10Response } from "../models";


export class ServeMarketActiveFuncGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10ServeMarketActiveFuncGetGet(useUid: number, appId: number, page: number, pageSize: number, funcKeys: string[]): Promise<ServeMarketActiveFuncGetV10Response> {
    const response = await this.openApiV10ServeMarketActiveFuncGetGetWithHttpInfo(useUid, appId, page, pageSize, funcKeys);
    return response.data;
  }

  async openApiV10ServeMarketActiveFuncGetGetWithHttpInfo(useUid: number, appId: number, page: number, pageSize: number, funcKeys: string[]): Promise<ApiResponse<ServeMarketActiveFuncGetV10Response>> {
    if (useUid == null) {
      throw new ApiException("Missing the required parameter 'useUid' when calling openApiV10ServeMarketActiveFuncGetGet");
    }

    if (appId == null) {
      throw new ApiException("Missing the required parameter 'appId' when calling openApiV10ServeMarketActiveFuncGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV10ServeMarketActiveFuncGetGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV10ServeMarketActiveFuncGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ServeMarketActiveFuncGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/serve_market/active_func/get/",
      queryParams: [
        { name: "use_uid", value: useUid },
        { name: "app_id", value: appId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "func_keys", value: funcKeys, collectionFormat: "csv" }
      ]
    });
  }
}


