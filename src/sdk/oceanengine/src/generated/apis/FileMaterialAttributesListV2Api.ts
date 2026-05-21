// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileMaterialAttributesListV2AccountType, FileMaterialAttributesListV2Filtering, FileMaterialAttributesListV2Response } from "../models";


export class FileMaterialAttributesListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileMaterialAttributesListGet(accountId: number, accountType: FileMaterialAttributesListV2AccountType, pageSize: number, page: number, filtering: FileMaterialAttributesListV2Filtering, returnLowqualitySuggestions: boolean): Promise<FileMaterialAttributesListV2Response> {
    const response = await this.openApi2FileMaterialAttributesListGetWithHttpInfo(accountId, accountType, pageSize, page, filtering, returnLowqualitySuggestions);
    return response.data;
  }

  async openApi2FileMaterialAttributesListGetWithHttpInfo(accountId: number, accountType: FileMaterialAttributesListV2AccountType, pageSize: number, page: number, filtering: FileMaterialAttributesListV2Filtering, returnLowqualitySuggestions: boolean): Promise<ApiResponse<FileMaterialAttributesListV2Response>> {
    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2FileMaterialAttributesListGet");
    }

    if (accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2FileMaterialAttributesListGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2FileMaterialAttributesListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2FileMaterialAttributesListGet");
    }
    return this.apiClient.requestWithHttpInfo<FileMaterialAttributesListV2Response>({
      method: "GET",
      path: "/open_api/2/file/material_attributes/list/",
      queryParams: [
        { name: "account_id", value: accountId },
        { name: "account_type", value: accountType },
        { name: "filtering", value: filtering },
        { name: "return_lowquality_suggestions", value: returnLowqualitySuggestions },
        { name: "page_size", value: pageSize },
        { name: "page", value: page }
      ]
    });
  }
}


