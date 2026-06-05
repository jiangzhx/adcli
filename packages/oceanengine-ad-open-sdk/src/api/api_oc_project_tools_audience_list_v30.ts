// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_audience_list_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsAudienceListV30Filtering, OcProjectToolsAudienceListV30PageInfo, OcProjectToolsAudienceListV30Response } from "../models/index";


export interface OcProjectToolsAudienceListV30ApiOpenApiV30OcProjectToolsAudienceListGetRequest {
  advertiserId: number | string;
  pageInfo: OcProjectToolsAudienceListV30PageInfo;
  filtering?: OcProjectToolsAudienceListV30Filtering;
}

export class OcProjectToolsAudienceListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsAudienceListGet(request: OcProjectToolsAudienceListV30ApiOpenApiV30OcProjectToolsAudienceListGetRequest): Promise<OcProjectToolsAudienceListV30Response> {
    const response = await this.openApiV30OcProjectToolsAudienceListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsAudienceListGetWithHttpInfo(request: OcProjectToolsAudienceListV30ApiOpenApiV30OcProjectToolsAudienceListGetRequest): Promise<ApiResponse<OcProjectToolsAudienceListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.pageInfo == null) {
      throw new ApiException("pageInfo is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<OcProjectToolsAudienceListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/oc_project/tools_audience/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "page_info", value: request.pageInfo }
      ]
    });
  }
}


