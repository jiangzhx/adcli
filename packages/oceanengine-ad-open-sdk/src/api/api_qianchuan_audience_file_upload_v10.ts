// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_audience_file_upload_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAudienceFileUploadV10Response } from "../models/index";


export interface QianchuanAudienceFileUploadV10ApiOpenApiV10QianchuanAudienceFileUploadPostRequest {
  advertiserId: number | string;
  file: Blob;
}

export class QianchuanAudienceFileUploadV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanAudienceFileUploadPost(request: QianchuanAudienceFileUploadV10ApiOpenApiV10QianchuanAudienceFileUploadPostRequest): Promise<QianchuanAudienceFileUploadV10Response> {
    const response = await this.openApiV10QianchuanAudienceFileUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAudienceFileUploadPostWithHttpInfo(request: QianchuanAudienceFileUploadV10ApiOpenApiV10QianchuanAudienceFileUploadPostRequest): Promise<ApiResponse<QianchuanAudienceFileUploadV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.file == null) {
      throw new ApiException("file is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAudienceFileUploadV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/audience_file/upload/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        advertiser_id: request.advertiserId
      },
      files: {
        file: request.file
      }
    });
  }
}


