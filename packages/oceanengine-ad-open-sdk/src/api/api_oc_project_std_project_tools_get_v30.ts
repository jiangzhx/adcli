// 由 oceanengine/ad_open_sdk_go api/api_oc_project_std_project_tools_get_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectStdProjectToolsGetV30Response } from "../models/index";


export interface OcProjectStdProjectToolsGetV30ApiOpenApiV30OcProjectStdProjectToolsGetGetRequest {
  advertiserId: number | string;
  projectIds: (number | string)[];
}

export class OcProjectStdProjectToolsGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectStdProjectToolsGetGet(request: OcProjectStdProjectToolsGetV30ApiOpenApiV30OcProjectStdProjectToolsGetGetRequest): Promise<OcProjectStdProjectToolsGetV30Response> {
    const response = await this.openApiV30OcProjectStdProjectToolsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectStdProjectToolsGetGetWithHttpInfo(request: OcProjectStdProjectToolsGetV30ApiOpenApiV30OcProjectStdProjectToolsGetGetRequest): Promise<ApiResponse<OcProjectStdProjectToolsGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.projectIds == null) {
      throw new ApiException("projectIds is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<OcProjectStdProjectToolsGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/oc_project/std_project/tools/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_ids", value: request.projectIds }
      ]
    });
  }
}


