// Generated from tencentad/marketing-api-go-sdk pkg/api/api_wechat_ad_labels.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { WechatAdLabelsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface WechatAdLabelsApiGetRequest {
  accountId: number | string;
  fields?: unknown;
}


export class WechatAdLabelsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: WechatAdLabelsApiGetRequest): Promise<WechatAdLabelsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: WechatAdLabelsApiGetRequest): Promise<ApiResponse<WechatAdLabelsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatAdLabelsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/wechat_ad_labels/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


