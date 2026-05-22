// Generated from oceanengine/ad_open_sdk_go api/api_tools_rta_get_info_tmp_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsRtaGetInfoTmpV2Response } from "../models/index";


export interface ToolsRtaGetInfoTmpV2ApiOpenApi2ToolsRtaGetInfoTmpGetRequest {
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

  async openApi2ToolsRtaGetInfoTmpGet(request: ToolsRtaGetInfoTmpV2ApiOpenApi2ToolsRtaGetInfoTmpGetRequest): Promise<ToolsRtaGetInfoTmpV2Response> {
    const response = await this.openApi2ToolsRtaGetInfoTmpGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRtaGetInfoTmpGetWithHttpInfo(request: ToolsRtaGetInfoTmpV2ApiOpenApi2ToolsRtaGetInfoTmpGetRequest): Promise<ApiResponse<ToolsRtaGetInfoTmpV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
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


