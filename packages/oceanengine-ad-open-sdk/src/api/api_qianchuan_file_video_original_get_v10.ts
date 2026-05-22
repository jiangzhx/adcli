// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_file_video_original_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanFileVideoOriginalGetV10Response } from "../models/index";


export interface QianchuanFileVideoOriginalGetV10ApiOpenApiV10QianchuanFileVideoOriginalGetGetRequest {
  advertiserId: string;
  materialIds: string[];
}

export class QianchuanFileVideoOriginalGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanFileVideoOriginalGetGet(request: QianchuanFileVideoOriginalGetV10ApiOpenApiV10QianchuanFileVideoOriginalGetGetRequest): Promise<QianchuanFileVideoOriginalGetV10Response> {
    const response = await this.openApiV10QianchuanFileVideoOriginalGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanFileVideoOriginalGetGetWithHttpInfo(request: QianchuanFileVideoOriginalGetV10ApiOpenApiV10QianchuanFileVideoOriginalGetGetRequest): Promise<ApiResponse<QianchuanFileVideoOriginalGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanFileVideoOriginalGetGet");
    }

    if (request.materialIds == null) {
      throw new ApiException("Missing the required parameter 'materialIds' when calling openApiV10QianchuanFileVideoOriginalGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanFileVideoOriginalGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/file/video/original/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "material_ids", value: request.materialIds }
      ]
    });
  }
}


