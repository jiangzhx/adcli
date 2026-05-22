// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DmpDataSourceFileUploadV2Response } from "../models";


export interface OpenApi2DmpDataSourceFileUploadPostRequest {
  advertiserId: number | string;
  file: File;
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

  async openApi2DmpDataSourceFileUploadPost(request: OpenApi2DmpDataSourceFileUploadPostRequest): Promise<DmpDataSourceFileUploadV2Response> {
    const response = await this.openApi2DmpDataSourceFileUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpDataSourceFileUploadPostWithHttpInfo(request: OpenApi2DmpDataSourceFileUploadPostRequest): Promise<ApiResponse<DmpDataSourceFileUploadV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DmpDataSourceFileUploadPost");
    }

    if (request.file == null) {
      throw new ApiException("Missing the required parameter 'file' when calling openApi2DmpDataSourceFileUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<DmpDataSourceFileUploadV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/data_source/file/upload/",
      queryParams: [

      ]
    });
  }
}


