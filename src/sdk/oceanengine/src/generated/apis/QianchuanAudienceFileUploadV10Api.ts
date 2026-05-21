// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { QianchuanAudienceFileUploadV10Response } from "../models";


export class QianchuanAudienceFileUploadV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceFileUploadPost(advertiserId: number, _file: File): Promise<QianchuanAudienceFileUploadV10Response> {
    const response = await this.openApiV10QianchuanAudienceFileUploadPostWithHttpInfo(advertiserId, _file);
    return response.data;
  }

  async openApiV10QianchuanAudienceFileUploadPostWithHttpInfo(advertiserId: number, _file: File): Promise<ApiResponse<QianchuanAudienceFileUploadV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAudienceFileUploadPost");
    }

    if (_file == null) {
      throw new ApiException("Missing the required parameter '_file' when calling openApiV10QianchuanAudienceFileUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAudienceFileUploadV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/audience_file/upload/",
      queryParams: [

      ]
    });
  }
}


