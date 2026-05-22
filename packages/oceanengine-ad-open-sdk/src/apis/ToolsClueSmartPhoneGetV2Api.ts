// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueSmartPhoneGetV2Response } from "../models";


export class ToolsClueSmartPhoneGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueSmartPhoneGetGet(advertiserId: number, page: number, pageSize: number): Promise<ToolsClueSmartPhoneGetV2Response> {
    const response = await this.openApi2ToolsClueSmartPhoneGetGetWithHttpInfo(advertiserId, page, pageSize);
    return response.data;
  }

  async openApi2ToolsClueSmartPhoneGetGetWithHttpInfo(advertiserId: number, page: number, pageSize: number): Promise<ApiResponse<ToolsClueSmartPhoneGetV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsClueSmartPhoneGetGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsClueSmartPhoneGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/clue/smart_phone/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


