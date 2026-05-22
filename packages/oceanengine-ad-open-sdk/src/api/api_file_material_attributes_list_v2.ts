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
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.accountType == null) {
      throw new ApiException("accountType is required and must be specified");
    }

    if (request.pageSize == null) {
      throw new ApiException("pageSize is required and must be specified");
    }

    if (request.pageSize != null && Number(request.pageSize) < 1) {
      throw new ApiException("pageSize must be greater than 1");
    }

    if (request.pageSize != null && Number(request.pageSize) > 1000) {
      throw new ApiException("pageSize must be less than 1000");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.page != null && Number(request.page) > 1000) {
      throw new ApiException("page must be less than 1000");
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


