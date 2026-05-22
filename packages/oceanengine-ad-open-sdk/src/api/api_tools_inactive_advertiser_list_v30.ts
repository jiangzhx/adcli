// Generated from oceanengine/ad_open_sdk_go api/api_tools_inactive_advertiser_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsInactiveAdvertiserListV30AdvertiserType, ToolsInactiveAdvertiserListV30Response } from "../models/index";


export interface ToolsInactiveAdvertiserListV30ApiOpenApiV30ToolsInactiveAdvertiserListGetRequest {
  appId: number | string;
  cursor?: number;
  count?: number;
  advertiserType?: ToolsInactiveAdvertiserListV30AdvertiserType;
}

export class ToolsInactiveAdvertiserListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsInactiveAdvertiserListGet(request: ToolsInactiveAdvertiserListV30ApiOpenApiV30ToolsInactiveAdvertiserListGetRequest): Promise<ToolsInactiveAdvertiserListV30Response> {
    const response = await this.openApiV30ToolsInactiveAdvertiserListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsInactiveAdvertiserListGetWithHttpInfo(request: ToolsInactiveAdvertiserListV30ApiOpenApiV30ToolsInactiveAdvertiserListGetRequest): Promise<ApiResponse<ToolsInactiveAdvertiserListV30Response>> {
    if (request.appId == null) {
      throw new ApiException("appId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsInactiveAdvertiserListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/inactive_advertiser/list/",
      queryParams: [
        { name: "app_id", value: request.appId },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count },
        { name: "advertiser_type", value: request.advertiserType }
      ]
    });
  }
}


