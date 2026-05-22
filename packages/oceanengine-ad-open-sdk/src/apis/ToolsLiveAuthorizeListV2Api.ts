// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsLiveAuthorizeListV2Response, ToolsLiveAuthorizeListV2Status } from "../models";


export interface OpenApi2ToolsLiveAuthorizeListGetRequest {
  advertiserId?: number | string;
  page?: number;
  pageSize?: number;
  status?: ToolsLiveAuthorizeListV2Status[];
}

export class ToolsLiveAuthorizeListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsLiveAuthorizeListGet(request: OpenApi2ToolsLiveAuthorizeListGetRequest): Promise<ToolsLiveAuthorizeListV2Response> {
    const response = await this.openApi2ToolsLiveAuthorizeListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsLiveAuthorizeListGetWithHttpInfo(request: OpenApi2ToolsLiveAuthorizeListGetRequest): Promise<ApiResponse<ToolsLiveAuthorizeListV2Response>> {

    return this.apiClient.requestWithHttpInfo<ToolsLiveAuthorizeListV2Response>({
      method: "GET",
      path: "/open_api/2/tools/live_authorize/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "status", value: request.status, collectionFormat: "csv" }
      ]
    });
  }
}


