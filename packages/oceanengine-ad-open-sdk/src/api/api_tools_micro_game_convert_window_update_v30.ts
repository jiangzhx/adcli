// Generated from oceanengine/ad_open_sdk_go api/api_tools_micro_game_convert_window_update_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsMicroGameConvertWindowUpdateV30Request, ToolsMicroGameConvertWindowUpdateV30Response } from "../models/index";


export interface ToolsMicroGameConvertWindowUpdateV30ApiOpenApiV30ToolsMicroGameConvertWindowUpdatePostRequest {
  toolsMicroGameConvertWindowUpdateV30Request?: ToolsMicroGameConvertWindowUpdateV30Request;
}

export class ToolsMicroGameConvertWindowUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroGameConvertWindowUpdatePost(request: ToolsMicroGameConvertWindowUpdateV30ApiOpenApiV30ToolsMicroGameConvertWindowUpdatePostRequest): Promise<ToolsMicroGameConvertWindowUpdateV30Response> {
    const response = await this.openApiV30ToolsMicroGameConvertWindowUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMicroGameConvertWindowUpdatePostWithHttpInfo(request: ToolsMicroGameConvertWindowUpdateV30ApiOpenApiV30ToolsMicroGameConvertWindowUpdatePostRequest): Promise<ApiResponse<ToolsMicroGameConvertWindowUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsMicroGameConvertWindowUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/tools/micro_game/convert_window/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.toolsMicroGameConvertWindowUpdateV30Request
    });
  }
}


