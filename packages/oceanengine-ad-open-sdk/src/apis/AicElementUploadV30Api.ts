// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AicElementUploadV30AccountType, AicElementUploadV30ElementType, AicElementUploadV30Response, AicElementUploadV30UseAs } from "../models";


export class AicElementUploadV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AicElementUploadPost(accountId: number, accountType: AicElementUploadV30AccountType, elementType: AicElementUploadV30ElementType, elementName: string, _file: File, pathName: string, useAs: AicElementUploadV30UseAs): Promise<AicElementUploadV30Response> {
    const response = await this.openApiV30AicElementUploadPostWithHttpInfo(accountId, accountType, elementType, elementName, _file, pathName, useAs);
    return response.data;
  }

  async openApiV30AicElementUploadPostWithHttpInfo(accountId: number, accountType: AicElementUploadV30AccountType, elementType: AicElementUploadV30ElementType, elementName: string, _file: File, pathName: string, useAs: AicElementUploadV30UseAs): Promise<ApiResponse<AicElementUploadV30Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30AicElementUploadPost");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApiV30AicElementUploadPost");
    }

    if (elementType == null) {
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


