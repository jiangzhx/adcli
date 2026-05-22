// Generated from oceanengine/ad_open_sdk_go api/api_creative_procedural_creative_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreativeProceduralCreativeUpdateV2Request, CreativeProceduralCreativeUpdateV2Response } from "../models/index";


export interface CreativeProceduralCreativeUpdateV2ApiOpenApi2CreativeProceduralCreativeUpdatePostRequest {
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

  async openApi2CreativeProceduralCreativeUpdatePost(request: CreativeProceduralCreativeUpdateV2ApiOpenApi2CreativeProceduralCreativeUpdatePostRequest): Promise<CreativeProceduralCreativeUpdateV2Response> {
    const response = await this.openApi2CreativeProceduralCreativeUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2CreativeProceduralCreativeUpdatePostWithHttpInfo(request: CreativeProceduralCreativeUpdateV2ApiOpenApi2CreativeProceduralCreativeUpdatePostRequest): Promise<ApiResponse<CreativeProceduralCreativeUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<CreativeProceduralCreativeUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/creative/procedural_creative/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.creativeProceduralCreativeUpdateV2Request
    });
  }
}


