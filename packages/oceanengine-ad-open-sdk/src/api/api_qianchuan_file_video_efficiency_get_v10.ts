// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_file_video_efficiency_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanFileVideoEfficiencyGetV10Response } from "../models/index";


export interface QianchuanFileVideoEfficiencyGetV10ApiOpenApiV10QianchuanFileVideoEfficiencyGetGetRequest {
  advertiserId: string;
  materialIds: string[];
}

export class QianchuanFileVideoEfficiencyGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanFileVideoEfficiencyGetGet(request: QianchuanFileVideoEfficiencyGetV10ApiOpenApiV10QianchuanFileVideoEfficiencyGetGetRequest): Promise<QianchuanFileVideoEfficiencyGetV10Response> {
    const response = await this.openApiV10QianchuanFileVideoEfficiencyGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanFileVideoEfficiencyGetGetWithHttpInfo(request: QianchuanFileVideoEfficiencyGetV10ApiOpenApiV10QianchuanFileVideoEfficiencyGetGetRequest): Promise<ApiResponse<QianchuanFileVideoEfficiencyGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanFileVideoEfficiencyGetGet");
    }

    if (request.materialIds == null) {
      throw new ApiException("Missing the required parameter 'materialIds' when calling openApiV10QianchuanFileVideoEfficiencyGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanFileVideoEfficiencyGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/file/video/efficiency/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "material_ids", value: request.materialIds, collectionFormat: "csv" }
      ]
    });
  }
}


