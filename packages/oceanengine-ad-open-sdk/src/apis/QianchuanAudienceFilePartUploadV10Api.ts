// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAudienceFilePartUploadV10Response } from "../models";


export interface OpenApiV10QianchuanAudienceFilePartUploadPostRequest {
  advertiserId: number;
  file: File;
  isFinished: number;
  partNum: number;
  fileKey?: string;
}

export class QianchuanAudienceFilePartUploadV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceFilePartUploadPost(request: OpenApiV10QianchuanAudienceFilePartUploadPostRequest): Promise<QianchuanAudienceFilePartUploadV10Response> {
    const response = await this.openApiV10QianchuanAudienceFilePartUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAudienceFilePartUploadPostWithHttpInfo(request: OpenApiV10QianchuanAudienceFilePartUploadPostRequest): Promise<ApiResponse<QianchuanAudienceFilePartUploadV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAudienceFilePartUploadPost");
    }

    if (request.file == null) {
      throw new ApiException("Missing the required parameter 'file' when calling openApiV10QianchuanAudienceFilePartUploadPost");
    }

    if (request.isFinished == null) {
      throw new ApiException("Missing the required parameter 'isFinished' when calling openApiV10QianchuanAudienceFilePartUploadPost");
    }

    if (request.partNum == null) {
      throw new ApiException("Missing the required parameter 'partNum' when calling openApiV10QianchuanAudienceFilePartUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAudienceFilePartUploadV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/audience_file/part_upload/",
      queryParams: [

      ]
    });
  }
}


