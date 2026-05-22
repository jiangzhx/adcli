// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanAudienceFilePartUploadV10Response } from "../models";


export class QianchuanAudienceFilePartUploadV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceFilePartUploadPost(advertiserId: number, _file: File, isFinished: number, partNum: number, fileKey: string): Promise<QianchuanAudienceFilePartUploadV10Response> {
    const response = await this.openApiV10QianchuanAudienceFilePartUploadPostWithHttpInfo(advertiserId, _file, isFinished, partNum, fileKey);
    return response.data;
  }

  async openApiV10QianchuanAudienceFilePartUploadPostWithHttpInfo(advertiserId: number, _file: File, isFinished: number, partNum: number, fileKey: string): Promise<ApiResponse<QianchuanAudienceFilePartUploadV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanAudienceFilePartUploadPost");
    }

    if (_file == null) {
      throw new ApiException("Missing the required parameter '_file' when calling openApiV10QianchuanAudienceFilePartUploadPost");
    }

    if (isFinished == null) {
      throw new ApiException("Missing the required parameter 'isFinished' when calling openApiV10QianchuanAudienceFilePartUploadPost");
    }

    if (partNum == null) {
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


