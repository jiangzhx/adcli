// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_material_raise_get_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsMaterialRaiseGetV30Filtering, OcProjectToolsMaterialRaiseGetV30Response } from "../models/index";


export interface OcProjectToolsMaterialRaiseGetV30ApiOpenApiV30OcProjectToolsMaterialRaiseGetGetRequest {
  advertiserId: number | string;
  filtering?: OcProjectToolsMaterialRaiseGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class OcProjectToolsMaterialRaiseGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsMaterialRaiseGetGet(request: OcProjectToolsMaterialRaiseGetV30ApiOpenApiV30OcProjectToolsMaterialRaiseGetGetRequest): Promise<OcProjectToolsMaterialRaiseGetV30Response> {
    const response = await this.openApiV30OcProjectToolsMaterialRaiseGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsMaterialRaiseGetGetWithHttpInfo(request: OcProjectToolsMaterialRaiseGetV30ApiOpenApiV30OcProjectToolsMaterialRaiseGetGetRequest): Promise<ApiResponse<OcProjectToolsMaterialRaiseGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<OcProjectToolsMaterialRaiseGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/oc_project/tools_material_raise/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


