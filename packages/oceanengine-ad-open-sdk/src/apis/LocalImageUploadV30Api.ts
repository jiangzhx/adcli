// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalImageUploadV30Response, LocalImageUploadV30UploadType } from "../models";


export interface OpenApiV30LocalImageUploadPostRequest {
  localAccountId: number | string;
  imageFile?: File;
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

  async openApiV30LocalImageUploadPost(request: OpenApiV30LocalImageUploadPostRequest): Promise<LocalImageUploadV30Response> {
    const response = await this.openApiV30LocalImageUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalImageUploadPostWithHttpInfo(request: OpenApiV30LocalImageUploadPostRequest): Promise<ApiResponse<LocalImageUploadV30Response>> {
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


