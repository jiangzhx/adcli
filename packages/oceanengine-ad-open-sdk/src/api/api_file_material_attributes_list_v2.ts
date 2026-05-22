// Generated from oceanengine/ad_open_sdk_go api/api_file_material_attributes_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileMaterialAttributesListV2AccountType, FileMaterialAttributesListV2Filtering, FileMaterialAttributesListV2Response } from "../models/index";


export interface FileMaterialAttributesListV2ApiOpenApi2FileMaterialAttributesListGetRequest {
  accountId: number | string;
  accountType: FileMaterialAttributesListV2AccountType;
  pageSize: number;
  page: number;
  filtering?: FileMaterialAttributesListV2Filtering;
  returnLowqualitySuggestions?: boolean;
}

export class FileMaterialAttributesListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileMaterialAttributesListGet(request: FileMaterialAttributesListV2ApiOpenApi2FileMaterialAttributesListGetRequest): Promise<FileMaterialAttributesListV2Response> {
    const response = await this.openApi2FileMaterialAttributesListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileMaterialAttributesListGetWithHttpInfo(request: FileMaterialAttributesListV2ApiOpenApi2FileMaterialAttributesListGetRequest): Promise<ApiResponse<FileMaterialAttributesListV2Response>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApi2FileMaterialAttributesListGet");
    }

    if (request.accountType == null) {
      throw new ApiException("Missing the required parameter 'accountType' when calling openApi2FileMaterialAttributesListGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2FileMaterialAttributesListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2FileMaterialAttributesListGet");
    }
    return this.apiClient.requestWithHttpInfo<FileMaterialAttributesListV2Response>({
      method: "GET",
      path: "/open_api/2/file/material_attributes/list/",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "account_type", value: request.accountType },
        { name: "filtering", value: request.filtering },
        { name: "return_lowquality_suggestions", value: request.returnLowqualitySuggestions },
        { name: "page_size", value: request.pageSize },
        { name: "page", value: request.page }
      ]
    });
  }
}


