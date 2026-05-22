// Generated from oceanengine/ad_open_sdk_go api/api_aic_element_upload_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AicElementUploadV30AccountType, AicElementUploadV30ElementType, AicElementUploadV30Response, AicElementUploadV30UseAs } from "../models/index";


export interface AicElementUploadV30ApiOpenApiV30AicElementUploadPostRequest {
  accountId: number | string;
  accountType: AicElementUploadV30AccountType;
  elementType: AicElementUploadV30ElementType;
  elementName?: string;
  file?: Blob;
  pathName?: string;
  useAs?: AicElementUploadV30UseAs;
}

export class AicElementUploadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicElementUploadPost(request: AicElementUploadV30ApiOpenApiV30AicElementUploadPostRequest): Promise<AicElementUploadV30Response> {
    const response = await this.openApiV30AicElementUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicElementUploadPostWithHttpInfo(request: AicElementUploadV30ApiOpenApiV30AicElementUploadPostRequest): Promise<ApiResponse<AicElementUploadV30Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30AicElementUploadPost");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30AicElementUploadPost");
    }

    if (request.elementType == null) {
      throw new ApiException("Missing the required parameter 'elementType' when calling openApiV30AicElementUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<AicElementUploadV30Response>({
      method: "POST",
      path: "/open_api/v3.0/aic/element/upload/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        account_type: request.accountType,
        element_name: request.elementName,
        element_type: request.elementType,
        path_name: request.pathName,
        use_as: request.useAs
      },
      files: {
        file: request.file
      }
    });
  }
}


