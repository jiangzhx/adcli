// Generated from oceanengine/ad_open_sdk_go api/api_tools_clue_smart_phone_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsClueSmartPhoneGetV2Response } from "../models/index";


export interface ToolsClueSmartPhoneGetV2ApiOpenApi2ToolsClueSmartPhoneGetGetRequest {
  advertiserId: number | string;
  page?: number;
  pageSize?: number;
}

export class ToolsClueSmartPhoneGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueSmartPhoneGetGet(request: ToolsClueSmartPhoneGetV2ApiOpenApi2ToolsClueSmartPhoneGetGetRequest): Promise<ToolsClueSmartPhoneGetV2Response> {
    const response = await this.openApi2ToolsClueSmartPhoneGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueSmartPhoneGetGetWithHttpInfo(request: ToolsClueSmartPhoneGetV2ApiOpenApi2ToolsClueSmartPhoneGetGetRequest): Promise<ApiResponse<ToolsClueSmartPhoneGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueSmartPhoneGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/smart_phone/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


