// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsRtaGetInfoTmpV2Response } from "../models";


export interface OpenApi2ToolsRtaGetInfoTmpGetRequest {
  advertiserId: number | string;
  campaignId?: number | string;
}

export class ToolsRtaGetInfoTmpV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRtaGetInfoTmpGet(request: OpenApi2ToolsRtaGetInfoTmpGetRequest): Promise<ToolsRtaGetInfoTmpV2Response> {
    const response = await this.openApi2ToolsRtaGetInfoTmpGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRtaGetInfoTmpGetWithHttpInfo(request: OpenApi2ToolsRtaGetInfoTmpGetRequest): Promise<ApiResponse<ToolsRtaGetInfoTmpV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsRtaGetInfoTmpGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRtaGetInfoTmpV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rta/get_info_tmp/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "campaign_id", value: request.campaignId }
      ]
    });
  }
}


