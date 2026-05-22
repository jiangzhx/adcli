// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicElementUploadV30AccountType, AicElementUploadV30ElementType, AicElementUploadV30Response, AicElementUploadV30UseAs } from "../models";


export interface OpenApiV30AicElementUploadPostRequest {
  accountId: number;
  accountType: AicElementUploadV30AccountType;
  elementType: AicElementUploadV30ElementType;
  elementName?: string;
  file?: File;
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

  async openApiV30AicElementUploadPost(request: OpenApiV30AicElementUploadPostRequest): Promise<AicElementUploadV30Response> {
    const response = await this.openApiV30AicElementUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AicElementUploadPostWithHttpInfo(request: OpenApiV30AicElementUploadPostRequest): Promise<ApiResponse<AicElementUploadV30Response>> {
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

      ]
    });
  }
}


