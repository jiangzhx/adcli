// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_keyword_list_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsKeywordListV30Filtering, OcProjectToolsKeywordListV30PageInfo, OcProjectToolsKeywordListV30Response } from "../models/index";


export interface OcProjectToolsKeywordListV30ApiOpenApiV30OcProjectToolsKeywordListGetRequest {
  advertiserId: number | string;
  pageInfo: OcProjectToolsKeywordListV30PageInfo;
  filtering?: OcProjectToolsKeywordListV30Filtering;
}

export class OcProjectToolsKeywordListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsKeywordListGet(request: OcProjectToolsKeywordListV30ApiOpenApiV30OcProjectToolsKeywordListGetRequest): Promise<OcProjectToolsKeywordListV30Response> {
    const response = await this.openApiV30OcProjectToolsKeywordListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsKeywordListGetWithHttpInfo(request: OcProjectToolsKeywordListV30ApiOpenApiV30OcProjectToolsKeywordListGetRequest): Promise<ApiResponse<OcProjectToolsKeywordListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.pageInfo == null) {
      throw new ApiException("pageInfo is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<OcProjectToolsKeywordListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/oc_project/tools_keyword/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page_info", value: request.pageInfo }
      ]
    });
  }
}


