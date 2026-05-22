// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_attachment_upload_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserAttachmentUploadV30AttachmentType, AdvertiserAttachmentUploadV30Response } from "../models/index";


export interface AdvertiserAttachmentUploadV30ApiOpenApiV30AdvertiserAttachmentUploadPostRequest {
  advertiserId: number | string;
  attachmentType: AdvertiserAttachmentUploadV30AttachmentType;
  filename: string;
  imageData: Blob;
}

export class AdvertiserAttachmentUploadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserAttachmentUploadPost(request: AdvertiserAttachmentUploadV30ApiOpenApiV30AdvertiserAttachmentUploadPostRequest): Promise<AdvertiserAttachmentUploadV30Response> {
    const response = await this.openApiV30AdvertiserAttachmentUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserAttachmentUploadPostWithHttpInfo(request: AdvertiserAttachmentUploadV30ApiOpenApiV30AdvertiserAttachmentUploadPostRequest): Promise<ApiResponse<AdvertiserAttachmentUploadV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.attachmentType == null) {
      throw new ApiException("attachmentType is required and must be specified");
    }

    if (request.filename == null) {
      throw new ApiException("filename is required and must be specified");
    }

    if (request.imageData == null) {
      throw new ApiException("imageData is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserAttachmentUploadV30Response>({
      method: "POST",
      path: "/open_api/v3.0/advertiser/attachment/upload/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        advertiser_id: request.advertiserId,
        attachment_type: request.attachmentType,
        filename: request.filename
      },
      files: {
        image_data: request.imageData
      }
    });
  }
}


