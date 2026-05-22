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
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.materialIds == null) {
      throw new ApiException("materialIds is required and must be specified");
    }

    if (request.materialIds != null && request.materialIds.length < 1) {
      throw new ApiException("materialIds must have at least 1 elements");
    }

    if (request.materialIds != null && request.materialIds.length > 100) {
      throw new ApiException("materialIds must have less than 100 elements");
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


