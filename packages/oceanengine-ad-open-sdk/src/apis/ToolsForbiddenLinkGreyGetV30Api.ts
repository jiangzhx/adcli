// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsForbiddenLinkGreyGetV30Response } from "../models";


export interface OpenApiV30ToolsForbiddenLinkGreyGetGetRequest {
  advertiserId?: number;
}

export class ToolsForbiddenLinkGreyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsForbiddenLinkGreyGetGet(request: OpenApiV30ToolsForbiddenLinkGreyGetGetRequest): Promise<ToolsForbiddenLinkGreyGetV30Response> {
    const response = await this.openApiV30ToolsForbiddenLinkGreyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsForbiddenLinkGreyGetGetWithHttpInfo(request: OpenApiV30ToolsForbiddenLinkGreyGetGetRequest): Promise<ApiResponse<ToolsForbiddenLinkGreyGetV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsForbiddenLinkGreyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/forbidden_link/grey/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


