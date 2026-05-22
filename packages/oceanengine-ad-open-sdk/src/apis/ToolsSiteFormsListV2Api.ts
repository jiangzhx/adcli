// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsSiteFormsListV2Response } from "../models";


export interface OpenApi2ToolsSiteFormsListGetRequest {
  advertiserId?: number | string;
  siteId?: number | string;
}

export class ToolsSiteFormsListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsSiteFormsListGet(request: OpenApi2ToolsSiteFormsListGetRequest): Promise<ToolsSiteFormsListV2Response> {
    const response = await this.openApi2ToolsSiteFormsListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsSiteFormsListGetWithHttpInfo(request: OpenApi2ToolsSiteFormsListGetRequest): Promise<ApiResponse<ToolsSiteFormsListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsSiteFormsListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/site/forms/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "site_id", value: request.siteId }
      ]
    });
  }
}


