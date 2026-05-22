// Generated from oceanengine/ad_open_sdk_go api/api_dmp_data_source_file_upload_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DmpDataSourceFileUploadV2Response } from "../models/index";


export interface DmpDataSourceFileUploadV2ApiOpenApi2DmpDataSourceFileUploadPostRequest {
  advertiserId: number | string;
  file: Blob;
  fileSignature?: string;
}

export class DmpDataSourceFileUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpDataSourceFileUploadPost(request: DmpDataSourceFileUploadV2ApiOpenApi2DmpDataSourceFileUploadPostRequest): Promise<DmpDataSourceFileUploadV2Response> {
    const response = await this.openApi2DmpDataSourceFileUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpDataSourceFileUploadPostWithHttpInfo(request: DmpDataSourceFileUploadV2ApiOpenApi2DmpDataSourceFileUploadPostRequest): Promise<ApiResponse<DmpDataSourceFileUploadV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.file == null) {
      throw new ApiException("file is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<DmpDataSourceFileUploadV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/data_source/file/upload/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        advertiser_id: request.advertiserId,
        file_signature: request.fileSignature
      },
      files: {
        file: request.file
      }
    });
  }
}


