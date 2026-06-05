// 由 oceanengine/ad_open_sdk_go api/api_std_project_list_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StdProjectListV30Filtering, StdProjectListV30Response } from "../models/index";


export interface StdProjectListV30ApiOpenApiV30StdProjectListGetRequest {
  advertiserId: number | string;
  filtering?: StdProjectListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class StdProjectListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StdProjectListGet(request: StdProjectListV30ApiOpenApiV30StdProjectListGetRequest): Promise<StdProjectListV30Response> {
    const response = await this.openApiV30StdProjectListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StdProjectListGetWithHttpInfo(request: StdProjectListV30ApiOpenApiV30StdProjectListGetRequest): Promise<ApiResponse<StdProjectListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StdProjectListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/std_project/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


