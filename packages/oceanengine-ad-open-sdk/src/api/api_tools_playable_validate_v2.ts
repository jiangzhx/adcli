// Generated from oceanengine/ad_open_sdk_go api/api_tools_playable_validate_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPlayableValidateV2Response } from "../models/index";


export interface ToolsPlayableValidateV2ApiOpenApi2ToolsPlayableValidateGetRequest {
  advertiserId: number | string;
  playableId: number | string;
}

export class ToolsPlayableValidateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPlayableValidateGet(request: ToolsPlayableValidateV2ApiOpenApi2ToolsPlayableValidateGetRequest): Promise<ToolsPlayableValidateV2Response> {
    const response = await this.openApi2ToolsPlayableValidateGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPlayableValidateGetWithHttpInfo(request: ToolsPlayableValidateV2ApiOpenApi2ToolsPlayableValidateGetRequest): Promise<ApiResponse<ToolsPlayableValidateV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.playableId == null) {
      throw new ApiException("playableId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPlayableValidateV2Response>({
      method: "GET",
      path: "/open_api/2/tools/playable/validate/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "playable_id", value: request.playableId }
      ]
    });
  }
}


