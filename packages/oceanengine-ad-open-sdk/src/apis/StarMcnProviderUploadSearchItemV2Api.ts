// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnProviderUploadSearchItemV2Request, StarMcnProviderUploadSearchItemV2Response } from "../models";


export class StarMcnProviderUploadSearchItemV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderUploadSearchItemPost(request: StarMcnProviderUploadSearchItemV2Request): Promise<StarMcnProviderUploadSearchItemV2Response> {
    const response = await this.openApi2StarMcnProviderUploadSearchItemPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderUploadSearchItemPostWithHttpInfo(request: StarMcnProviderUploadSearchItemV2Request): Promise<ApiResponse<StarMcnProviderUploadSearchItemV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarMcnProviderUploadSearchItemV2Response>({
      method: "POST",
      path: "/open_api/2/star/mcn/provider_upload_search_item/",
      queryParams: [

      ],
      body: request
    });
  }
}


