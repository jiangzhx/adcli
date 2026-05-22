// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalImUploadImageV30Response } from "../models";


export interface OpenApiV30LocalImUploadImagePostRequest {
  imageFile: File;
  localAccountId: number | string;
}

export class LocalImUploadImageV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalImUploadImagePost(request: OpenApiV30LocalImUploadImagePostRequest): Promise<LocalImUploadImageV30Response> {
    const response = await this.openApiV30LocalImUploadImagePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalImUploadImagePostWithHttpInfo(request: OpenApiV30LocalImUploadImagePostRequest): Promise<ApiResponse<LocalImUploadImageV30Response>> {
    if (request.imageFile == null) {
      throw new ApiException("Missing the required parameter 'imageFile' when calling openApiV30LocalImUploadImagePost");
    }

    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalImUploadImagePost");
    }
    return this.apiClient.requestWithHttpInfo<LocalImUploadImageV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/im/upload/image/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        local_account_id: request.localAccountId
      },
      files: {
        image_file: request.imageFile
      }
    });
  }
}


