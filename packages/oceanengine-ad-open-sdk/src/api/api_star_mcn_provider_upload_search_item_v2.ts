// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_provider_upload_search_item_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnProviderUploadSearchItemV2Request, StarMcnProviderUploadSearchItemV2Response } from "../models/index";


export interface StarMcnProviderUploadSearchItemV2ApiOpenApi2StarMcnProviderUploadSearchItemPostRequest {
  starMcnProviderUploadSearchItemV2Request?: StarMcnProviderUploadSearchItemV2Request;
}

export class StarMcnProviderUploadSearchItemV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderUploadSearchItemPost(request: StarMcnProviderUploadSearchItemV2ApiOpenApi2StarMcnProviderUploadSearchItemPostRequest): Promise<StarMcnProviderUploadSearchItemV2Response> {
    const response = await this.openApi2StarMcnProviderUploadSearchItemPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderUploadSearchItemPostWithHttpInfo(request: StarMcnProviderUploadSearchItemV2ApiOpenApi2StarMcnProviderUploadSearchItemPostRequest): Promise<ApiResponse<StarMcnProviderUploadSearchItemV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarMcnProviderUploadSearchItemV2Response>({
      method: "POST",
      path: "/open_api/2/star/mcn/provider_upload_search_item/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starMcnProviderUploadSearchItemV2Request
    });
  }
}


