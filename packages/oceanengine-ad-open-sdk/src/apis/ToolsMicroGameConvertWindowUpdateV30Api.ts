// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsMicroGameConvertWindowUpdateV30Request, ToolsMicroGameConvertWindowUpdateV30Response } from "../models";


export class ToolsMicroGameConvertWindowUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroGameConvertWindowUpdatePost(request: ToolsMicroGameConvertWindowUpdateV30Request): Promise<ToolsMicroGameConvertWindowUpdateV30Response> {
    const response = await this.openApiV30ToolsMicroGameConvertWindowUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMicroGameConvertWindowUpdatePostWithHttpInfo(request: ToolsMicroGameConvertWindowUpdateV30Request): Promise<ApiResponse<ToolsMicroGameConvertWindowUpdateV30Response>> {
    return this.apiClient.requestWithHttpInfo<ToolsMicroGameConvertWindowUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/micro_game/convert_window/update/",
      queryParams: [

      ],
      body: request
    });
  }
}


