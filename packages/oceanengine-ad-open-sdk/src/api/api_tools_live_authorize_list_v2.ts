// Generated from oceanengine/ad_open_sdk_go api/api_tools_live_authorize_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsLiveAuthorizeListV2Response, ToolsLiveAuthorizeListV2Status } from "../models/index";


export interface ToolsLiveAuthorizeListV2ApiOpenApi2ToolsLiveAuthorizeListGetRequest {
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

  async openApi2ToolsLiveAuthorizeListGet(request: ToolsLiveAuthorizeListV2ApiOpenApi2ToolsLiveAuthorizeListGetRequest): Promise<ToolsLiveAuthorizeListV2Response> {
    const response = await this.openApi2ToolsLiveAuthorizeListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsLiveAuthorizeListGetWithHttpInfo(request: ToolsLiveAuthorizeListV2ApiOpenApi2ToolsLiveAuthorizeListGetRequest): Promise<ApiResponse<ToolsLiveAuthorizeListV2Response>> {

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


