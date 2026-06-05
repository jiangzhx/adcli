// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_cost_protect_status_get_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsCostProtectStatusGetV30Response } from "../models/index";


export interface OcProjectToolsCostProtectStatusGetV30ApiOpenApiV30OcProjectToolsCostProtectStatusGetGetRequest {
  advertiserId: number | string;
  scheduleIds?: (number | string)[];
}

export class OcProjectToolsCostProtectStatusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsCostProtectStatusGetGet(request: OcProjectToolsCostProtectStatusGetV30ApiOpenApiV30OcProjectToolsCostProtectStatusGetGetRequest): Promise<OcProjectToolsCostProtectStatusGetV30Response> {
    const response = await this.openApiV30OcProjectToolsCostProtectStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsCostProtectStatusGetGetWithHttpInfo(request: OcProjectToolsCostProtectStatusGetV30ApiOpenApiV30OcProjectToolsCostProtectStatusGetGetRequest): Promise<ApiResponse<OcProjectToolsCostProtectStatusGetV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<OcProjectToolsCostProtectStatusGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/oc_project/tools/cost_protect_status/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "schedule_ids", value: request.scheduleIds }
      ]
    });
  }
}


