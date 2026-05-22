// Generated from oceanengine/ad_open_sdk_go api/api_local_image_upload_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalImageUploadV30Response, LocalImageUploadV30UploadType } from "../models/index";


export interface LocalImageUploadV30ApiOpenApiV30LocalImageUploadPostRequest {
  localAccountId: number | string;
  imageFile?: Blob;
  imageSignature?: string;
  isAigc?: boolean;
  uploadType?: LocalImageUploadV30UploadType;
}

export class LocalImageUploadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalImageUploadPost(request: LocalImageUploadV30ApiOpenApiV30LocalImageUploadPostRequest): Promise<LocalImageUploadV30Response> {
    const response = await this.openApiV30LocalImageUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalImageUploadPostWithHttpInfo(request: LocalImageUploadV30ApiOpenApiV30LocalImageUploadPostRequest): Promise<ApiResponse<LocalImageUploadV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalImageUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<LocalImageUploadV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/image/upload/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        image_signature: request.imageSignature,
        is_aigc: request.isAigc,
        local_account_id: request.localAccountId,
        upload_type: request.uploadType
      },
      files: {
        image_file: request.imageFile
      }
    });
  }
}


