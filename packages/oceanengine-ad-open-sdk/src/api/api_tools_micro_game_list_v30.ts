// Generated from oceanengine/ad_open_sdk_go api/api_tools_micro_game_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsMicroGameListV30AccountAssetQueryScope, ToolsMicroGameListV30Filtering, ToolsMicroGameListV30Response } from "../models/index";


export interface ToolsMicroGameListV30ApiOpenApiV30ToolsMicroGameListGetRequest {
  advertiserId: number | string;
  filtering?: ToolsMicroGameListV30Filtering;
  page?: number;
  pageSize?: number;
  accountAssetQueryScope?: ToolsMicroGameListV30AccountAssetQueryScope;
}

export class ToolsMicroGameListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsMicroGameListGet(request: ToolsMicroGameListV30ApiOpenApiV30ToolsMicroGameListGetRequest): Promise<ToolsMicroGameListV30Response> {
    const response = await this.openApiV30ToolsMicroGameListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsMicroGameListGetWithHttpInfo(request: ToolsMicroGameListV30ApiOpenApiV30ToolsMicroGameListGetRequest): Promise<ApiResponse<ToolsMicroGameListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsMicroGameListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/micro_game/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "account_asset_query_scope", value: request.accountAssetQueryScope }
      ]
    });
  }
}


