// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAudienceFileUploadV10Response } from "../models";


export interface OpenApiV10QianchuanAudienceFileUploadPostRequest {
  advertiserId: number;
  file: File;
}

export class QianchuanAudienceFileUploadV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceFileUploadPost(request: OpenApiV10QianchuanAudienceFileUploadPostRequest): Promise<QianchuanAudienceFileUploadV10Response> {
    const response = await this.openApiV10QianchuanAudienceFileUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAudienceFileUploadPostWithHttpInfo(request: OpenApiV10QianchuanAudienceFileUploadPostRequest): Promise<ApiResponse<QianchuanAudienceFileUploadV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAudienceFileUploadPost");
    }

    if (request.file == null) {
      throw new ApiException("Missing the required parameter 'file' when calling openApiV10QianchuanAudienceFileUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAudienceFileUploadV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/audience_file/upload/",
      queryParams: [

      ]
    });
  }
}


