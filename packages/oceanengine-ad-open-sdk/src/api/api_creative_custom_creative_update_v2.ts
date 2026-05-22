// Generated from oceanengine/ad_open_sdk_go api/api_creative_custom_creative_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreativeCustomCreativeUpdateV2Request, CreativeCustomCreativeUpdateV2Response } from "../models/index";


export interface CreativeCustomCreativeUpdateV2ApiOpenApi2CreativeCustomCreativeUpdatePostRequest {
  creativeCustomCreativeUpdateV2Request?: CreativeCustomCreativeUpdateV2Request;
}

export class CreativeCustomCreativeUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreativeCustomCreativeUpdatePost(request: CreativeCustomCreativeUpdateV2ApiOpenApi2CreativeCustomCreativeUpdatePostRequest): Promise<CreativeCustomCreativeUpdateV2Response> {
    const response = await this.openApi2CreativeCustomCreativeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreativeCustomCreativeUpdatePostWithHttpInfo(request: CreativeCustomCreativeUpdateV2ApiOpenApi2CreativeCustomCreativeUpdatePostRequest): Promise<ApiResponse<CreativeCustomCreativeUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreativeCustomCreativeUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/creative/custom_creative/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.creativeCustomCreativeUpdateV2Request
    });
  }
}


