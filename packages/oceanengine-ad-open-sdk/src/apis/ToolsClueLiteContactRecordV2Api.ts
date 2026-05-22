// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsClueLiteContactRecordV2Request, ToolsClueLiteContactRecordV2Response } from "../models";


export interface OpenApi2ToolsClueLiteContactRecordPostRequest {
  toolsClueLiteContactRecordV2Request?: ToolsClueLiteContactRecordV2Request;
}

export class ToolsClueLiteContactRecordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsClueLiteContactRecordPost(request: OpenApi2ToolsClueLiteContactRecordPostRequest): Promise<ToolsClueLiteContactRecordV2Response> {
    const response = await this.openApi2ToolsClueLiteContactRecordPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsClueLiteContactRecordPostWithHttpInfo(request: OpenApi2ToolsClueLiteContactRecordPostRequest): Promise<ApiResponse<ToolsClueLiteContactRecordV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsClueLiteContactRecordV2Response>({
      method: "POST",
      path: "/open_api/2/tools/clue/lite/contact/record/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsClueLiteContactRecordV2Request
    });
  }
}


