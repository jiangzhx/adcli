// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DmpDataSourceFileUploadV2Response } from "../models";


export class DmpDataSourceFileUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpDataSourceFileUploadPost(advertiserId: number, _file: File, fileSignature: string): Promise<DmpDataSourceFileUploadV2Response> {
    const response = await this.openApi2DmpDataSourceFileUploadPostWithHttpInfo(advertiserId, _file, fileSignature);
    return response.data;
  }

  async openApi2DmpDataSourceFileUploadPostWithHttpInfo(advertiserId: number, _file: File, fileSignature: string): Promise<ApiResponse<DmpDataSourceFileUploadV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DmpDataSourceFileUploadPost");
    }

    if (_file == null) {
      throw new ApiException("Missing the required parameter '_file' when calling openApi2DmpDataSourceFileUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<DmpDataSourceFileUploadV2Response>({
      method: "POST",
      path: "/open_api/2/dmp/data_source/file/upload/",
      queryParams: [

      ]
    });
  }
}


