// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FileImageAdvertiserV2Response, FileImageAdvertiserV2UploadTo, FileImageAdvertiserV2UploadType } from "../models";


export class FileImageAdvertiserV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileImageAdvertiserPost(advertiserId: number, uploadTo: FileImageAdvertiserV2UploadTo, imageFile: File, imageSignature: string, imageUrl: string, uploadType: FileImageAdvertiserV2UploadType): Promise<FileImageAdvertiserV2Response> {
    const response = await this.openApi2FileImageAdvertiserPostWithHttpInfo(advertiserId, uploadTo, imageFile, imageSignature, imageUrl, uploadType);
    return response.data;
  }

  async openApi2FileImageAdvertiserPostWithHttpInfo(advertiserId: number, uploadTo: FileImageAdvertiserV2UploadTo, imageFile: File, imageSignature: string, imageUrl: string, uploadType: FileImageAdvertiserV2UploadType): Promise<ApiResponse<FileImageAdvertiserV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileImageAdvertiserPost");
    }

    if (uploadTo == null) {
      throw new ApiException("Missing the required parameter 'uploadTo' when calling openApi2FileImageAdvertiserPost");
    }
    return this.apiClient.requestWithHttpInfo<FileImageAdvertiserV2Response>({
      method: "POST",
      path: "/open_api/2/file/image/advertiser/",
      queryParams: [

      ]
    });
  }
}


