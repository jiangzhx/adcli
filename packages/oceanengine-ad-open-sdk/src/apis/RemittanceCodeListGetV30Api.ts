// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RemittanceCodeListGetV30Response } from "../models";


export class RemittanceCodeListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30RemittanceCodeListGetGet(ccAccountId: number, accountId: number, page: number, pageSize: number, remittanceCodeList: string[]): Promise<RemittanceCodeListGetV30Response> {
    const response = await this.openApiV30RemittanceCodeListGetGetWithHttpInfo(ccAccountId, accountId, page, pageSize, remittanceCodeList);
    return response.data;
  }

  async openApiV30RemittanceCodeListGetGetWithHttpInfo(ccAccountId: number, accountId: number, page: number, pageSize: number, remittanceCodeList: string[]): Promise<ApiResponse<RemittanceCodeListGetV30Response>> {
    if (ccAccountId == null) {
      throw new ApiException("Missing the required parameter 'ccAccountId' when calling openApiV30RemittanceCodeListGetGet");
    }

    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30RemittanceCodeListGetGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30RemittanceCodeListGetGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30RemittanceCodeListGetGet");
    }

    if (remittanceCodeList == null) {
      throw new ApiException("Missing the required parameter 'remittanceCodeList' when calling openApiV30RemittanceCodeListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<RemittanceCodeListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/remittance_code/list/get/",
      queryParams: [
        { name: "cc_account_id", value: ccAccountId },
        { name: "account_id", value: accountId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "remittance_code_list", value: remittanceCodeList, collectionFormat: "csv" }
      ]
    });
  }
}


