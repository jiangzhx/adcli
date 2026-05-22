// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_audience_file_part_upload_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanAudienceFilePartUploadV10Response } from "../models/index";


export interface QianchuanAudienceFilePartUploadV10ApiOpenApiV10QianchuanAudienceFilePartUploadPostRequest {
  advertiserId: number | string;
  file: Blob;
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

  async openApiV10QianchuanAudienceFilePartUploadPost(request: QianchuanAudienceFilePartUploadV10ApiOpenApiV10QianchuanAudienceFilePartUploadPostRequest): Promise<QianchuanAudienceFilePartUploadV10Response> {
    const response = await this.openApiV10QianchuanAudienceFilePartUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanAudienceFilePartUploadPostWithHttpInfo(request: QianchuanAudienceFilePartUploadV10ApiOpenApiV10QianchuanAudienceFilePartUploadPostRequest): Promise<ApiResponse<QianchuanAudienceFilePartUploadV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.file == null) {
      throw new ApiException("file is required and must be specified");
    }

    if (request.isFinished == null) {
      throw new ApiException("isFinished is required and must be specified");
    }

    if (request.isFinished != null && Number(request.isFinished) < 0) {
      throw new ApiException("isFinished must be greater than 0");
    }

    if (request.isFinished != null && Number(request.isFinished) > 1) {
      throw new ApiException("isFinished must be less than 1");
    }

    if (request.partNum == null) {
      throw new ApiException("partNum is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanAudienceFilePartUploadV10Response>({
      method: "POST",
      path: "/open_api/v1.0/qianchuan/audience_file/part_upload/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        advertiser_id: request.advertiserId,
        file_key: request.fileKey,
        is_finished: request.isFinished,
        part_num: request.partNum
      },
      files: {
        file: request.file
      }
    });
  }
}


