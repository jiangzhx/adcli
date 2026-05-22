// Generated from oceanengine/ad_open_sdk_go api/api_tools_hot_material_derive_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsHotMaterialDeriveListV30Filtering, ToolsHotMaterialDeriveListV30Response } from "../models/index";


export interface ToolsHotMaterialDeriveListV30ApiOpenApiV30ToolsHotMaterialDeriveListGetRequest {
  advertiserId: number | string;
  page: number;
  pageSize: number;
  filtering?: ToolsHotMaterialDeriveListV30Filtering;
}

export class ToolsHotMaterialDeriveListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsHotMaterialDeriveListGet(request: ToolsHotMaterialDeriveListV30ApiOpenApiV30ToolsHotMaterialDeriveListGetRequest): Promise<ToolsHotMaterialDeriveListV30Response> {
    const response = await this.openApiV30ToolsHotMaterialDeriveListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsHotMaterialDeriveListGetWithHttpInfo(request: ToolsHotMaterialDeriveListV30ApiOpenApiV30ToolsHotMaterialDeriveListGetRequest): Promise<ApiResponse<ToolsHotMaterialDeriveListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30ToolsHotMaterialDeriveListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30ToolsHotMaterialDeriveListGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30ToolsHotMaterialDeriveListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsHotMaterialDeriveListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/hot_material_derive/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


