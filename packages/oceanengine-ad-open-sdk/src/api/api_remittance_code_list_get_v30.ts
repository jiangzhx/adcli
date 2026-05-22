// Generated from oceanengine/ad_open_sdk_go api/api_remittance_code_list_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RemittanceCodeListGetV30Response } from "../models/index";


export interface RemittanceCodeListGetV30ApiOpenApiV30RemittanceCodeListGetGetRequest {
  ccAccountId: number | string;
  accountId: number | string;
  page: number;
  pageSize: number;
  remittanceCodeList: string[];
}

export class RemittanceCodeListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RemittanceCodeListGetGet(request: RemittanceCodeListGetV30ApiOpenApiV30RemittanceCodeListGetGetRequest): Promise<RemittanceCodeListGetV30Response> {
    const response = await this.openApiV30RemittanceCodeListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30RemittanceCodeListGetGetWithHttpInfo(request: RemittanceCodeListGetV30ApiOpenApiV30RemittanceCodeListGetGetRequest): Promise<ApiResponse<RemittanceCodeListGetV30Response>> {
    if (request.ccAccountId == null) {
      throw new ApiException("ccAccountId is required and must be specified");
    }

    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.pageSize == null) {
      throw new ApiException("pageSize is required and must be specified");
    }

    if (request.remittanceCodeList == null) {
      throw new ApiException("remittanceCodeList is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<RemittanceCodeListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/remittance_code/list/get/",
      queryParams: [
        { name: "cc_account_id", value: request.ccAccountId },
        { name: "account_id", value: request.accountId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "remittance_code_list", value: request.remittanceCodeList }
      ]
    });
  }
}


