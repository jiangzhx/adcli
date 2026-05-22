// Generated from oceanengine/ad_open_sdk_go api/api_tools_forbidden_link_grey_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsForbiddenLinkGreyGetV30Response } from "../models/index";


export interface ToolsForbiddenLinkGreyGetV30ApiOpenApiV30ToolsForbiddenLinkGreyGetGetRequest {
  advertiserId?: number | string;
}

export class ToolsForbiddenLinkGreyGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsForbiddenLinkGreyGetGet(request: ToolsForbiddenLinkGreyGetV30ApiOpenApiV30ToolsForbiddenLinkGreyGetGetRequest): Promise<ToolsForbiddenLinkGreyGetV30Response> {
    const response = await this.openApiV30ToolsForbiddenLinkGreyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsForbiddenLinkGreyGetGetWithHttpInfo(request: ToolsForbiddenLinkGreyGetV30ApiOpenApiV30ToolsForbiddenLinkGreyGetGetRequest): Promise<ApiResponse<ToolsForbiddenLinkGreyGetV30Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsForbiddenLinkGreyGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/forbidden_link/grey/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId }
      ]
    });
  }
}


