// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_online_preview_qrcode.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OnlinePreviewQrcodeGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface OnlinePreviewQrcodeApiGetRequest {
  accountId: number | string;
  dynamicCreativeId: number | string;
  userIdType?: string;
  previewCreativeComponents?: unknown;
  fields?: unknown;
}


export class OnlinePreviewQrcodeApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: OnlinePreviewQrcodeApiGetRequest): Promise<OnlinePreviewQrcodeGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: OnlinePreviewQrcodeApiGetRequest): Promise<ApiResponse<OnlinePreviewQrcodeGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dynamicCreativeId == null) {
      throw new ApiException("Missing the required parameter 'dynamicCreativeId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<OnlinePreviewQrcodeGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/online_preview_qrcode/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "user_id_type", value: request.userIdType },
        { name: "dynamic_creative_id", value: request.dynamicCreativeId },
        { name: "preview_creative_components", value: request.previewCreativeComponents },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


