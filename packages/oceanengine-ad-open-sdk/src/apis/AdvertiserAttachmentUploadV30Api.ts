// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserAttachmentUploadV30AttachmentType, AdvertiserAttachmentUploadV30Response } from "../models";


export class AdvertiserAttachmentUploadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserAttachmentUploadPost(advertiserId: number, attachmentType: AdvertiserAttachmentUploadV30AttachmentType, filename: string, imageData: File): Promise<AdvertiserAttachmentUploadV30Response> {
    const response = await this.openApiV30AdvertiserAttachmentUploadPostWithHttpInfo(advertiserId, attachmentType, filename, imageData);
    return response.data;
  }

  async openApiV30AdvertiserAttachmentUploadPostWithHttpInfo(advertiserId: number, attachmentType: AdvertiserAttachmentUploadV30AttachmentType, filename: string, imageData: File): Promise<ApiResponse<AdvertiserAttachmentUploadV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AdvertiserAttachmentUploadPost");
    }

    if (attachmentType == null) {
      throw new ApiException("Missing the required parameter 'attachmentType' when calling openApiV30AdvertiserAttachmentUploadPost");
    }

    if (filename == null) {
      throw new ApiException("Missing the required parameter 'filename' when calling openApiV30AdvertiserAttachmentUploadPost");
    }

    if (imageData == null) {
      throw new ApiException("Missing the required parameter 'imageData' when calling openApiV30AdvertiserAttachmentUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserAttachmentUploadV30Response>({
      method: "POST",
      path: "/open_api/v3.0/advertiser/attachment/upload/",
      queryParams: [

      ]
    });
  }
}


