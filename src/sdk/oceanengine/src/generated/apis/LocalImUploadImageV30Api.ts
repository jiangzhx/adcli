// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalImUploadImageV30Response } from "../models";


export class LocalImUploadImageV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalImUploadImagePost(imageFile: File, localAccountId: number): Promise<LocalImUploadImageV30Response> {
    const response = await this.openApiV30LocalImUploadImagePostWithHttpInfo(imageFile, localAccountId);
    return response.data;
  }

  async openApiV30LocalImUploadImagePostWithHttpInfo(imageFile: File, localAccountId: number): Promise<ApiResponse<LocalImUploadImageV30Response>> {
    if (imageFile == null) {
      throw new ApiException("Missing the required parameter 'imageFile' when calling openApiV30LocalImUploadImagePost");
    }

    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalImUploadImagePost");
    }
    return this.apiClient.requestWithHttpInfo<LocalImUploadImageV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/im/upload/image/",
      queryParams: [

      ]
    });
  }
}


