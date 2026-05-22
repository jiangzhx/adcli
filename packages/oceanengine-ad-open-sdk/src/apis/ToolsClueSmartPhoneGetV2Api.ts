// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueSmartPhoneGetV2Response } from "../models";


export interface OpenApi2ToolsClueSmartPhoneGetGetRequest {
  advertiserId: number;
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

  async openApi2ToolsClueSmartPhoneGetGet(request: OpenApi2ToolsClueSmartPhoneGetGetRequest): Promise<ToolsClueSmartPhoneGetV2Response> {
    const response = await this.openApi2ToolsClueSmartPhoneGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueSmartPhoneGetGetWithHttpInfo(request: OpenApi2ToolsClueSmartPhoneGetGetRequest): Promise<ApiResponse<ToolsClueSmartPhoneGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueSmartPhoneGetGet");
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


