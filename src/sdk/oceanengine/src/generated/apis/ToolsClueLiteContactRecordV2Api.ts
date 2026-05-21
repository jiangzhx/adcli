// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsClueLiteContactRecordV2Request, ToolsClueLiteContactRecordV2Response } from "../models";


export class ToolsClueLiteContactRecordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueLiteContactRecordPost(toolsClueLiteContactRecordV2Request: ToolsClueLiteContactRecordV2Request): Promise<ToolsClueLiteContactRecordV2Response> {
    const response = await this.openApi2ToolsClueLiteContactRecordPostWithHttpInfo(toolsClueLiteContactRecordV2Request);
    return response.data;
  }

  async openApi2ToolsClueLiteContactRecordPostWithHttpInfo(toolsClueLiteContactRecordV2Request: ToolsClueLiteContactRecordV2Request): Promise<ApiResponse<ToolsClueLiteContactRecordV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueLiteContactRecordV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/lite/contact/record/",
      queryParams: [

      ],
      body: toolsClueLiteContactRecordV2Request
    });
  }
}


