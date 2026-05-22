// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeProceduralCreativeUpdateV2Request, CreativeProceduralCreativeUpdateV2Response } from "../models";


export interface OpenApi2CreativeProceduralCreativeUpdatePostRequest {
  creativeProceduralCreativeUpdateV2Request?: CreativeProceduralCreativeUpdateV2Request;
}

export class CreativeProceduralCreativeUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2CreativeProceduralCreativeUpdatePost(request: OpenApi2CreativeProceduralCreativeUpdatePostRequest): Promise<CreativeProceduralCreativeUpdateV2Response> {
    const response = await this.openApi2CreativeProceduralCreativeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreativeProceduralCreativeUpdatePostWithHttpInfo(request: OpenApi2CreativeProceduralCreativeUpdatePostRequest): Promise<ApiResponse<CreativeProceduralCreativeUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreativeProceduralCreativeUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/creative/procedural_creative/update/",
      queryParams: [

      ],
      body: request.creativeProceduralCreativeUpdateV2Request
    });
  }
}


