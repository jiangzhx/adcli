// Generated from oceanengine/ad_open_sdk_go api/api_fix_remittance_code_list_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FixRemittanceCodeListGetV30Response } from "../models/index";


export interface FixRemittanceCodeListGetV30ApiOpenApiV30FixRemittanceCodeListGetGetRequest {
  ccAccountId: number | string;
  accountId: number | string;
  remittanceCodeList: string[];
  page?: number;
  pageSize?: number;
}

export class FixRemittanceCodeListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FixRemittanceCodeListGetGet(request: FixRemittanceCodeListGetV30ApiOpenApiV30FixRemittanceCodeListGetGetRequest): Promise<FixRemittanceCodeListGetV30Response> {
    const response = await this.openApiV30FixRemittanceCodeListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FixRemittanceCodeListGetGetWithHttpInfo(request: FixRemittanceCodeListGetV30ApiOpenApiV30FixRemittanceCodeListGetGetRequest): Promise<ApiResponse<FixRemittanceCodeListGetV30Response>> {
    if (request.ccAccountId == null) {
      throw new ApiException("ccAccountId is required and must be specified");
    }

    if (request.accountId == null) {
      throw new ApiException("accountId is required and must be specified");
    }

    if (request.remittanceCodeList == null) {
      throw new ApiException("remittanceCodeList is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<FixRemittanceCodeListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/fix_remittance_code/list/get/",
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


