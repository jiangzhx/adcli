// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalImageUploadV30Response, LocalImageUploadV30UploadType } from "../models";


export class LocalImageUploadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalImageUploadPost(localAccountId: number, imageFile: File, imageSignature: string, isAigc: boolean, uploadType: LocalImageUploadV30UploadType): Promise<LocalImageUploadV30Response> {
    const response = await this.openApiV30LocalImageUploadPostWithHttpInfo(localAccountId, imageFile, imageSignature, isAigc, uploadType);
    return response.data;
  }

  async openApiV30LocalImageUploadPostWithHttpInfo(localAccountId: number, imageFile: File, imageSignature: string, isAigc: boolean, uploadType: LocalImageUploadV30UploadType): Promise<ApiResponse<LocalImageUploadV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalImageUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<LocalImageUploadV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/image/upload/",
      queryParams: [

      ]
    });
  }
}


