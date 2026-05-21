// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FixRemittanceCodeListGetV30Response } from "../models";


export class FixRemittanceCodeListGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FixRemittanceCodeListGetGet(ccAccountId: number, accountId: number, remittanceCodeList: string[], page: number, pageSize: number): Promise<FixRemittanceCodeListGetV30Response> {
    const response = await this.openApiV30FixRemittanceCodeListGetGetWithHttpInfo(ccAccountId, accountId, remittanceCodeList, page, pageSize);
    return response.data;
  }

  async openApiV30FixRemittanceCodeListGetGetWithHttpInfo(ccAccountId: number, accountId: number, remittanceCodeList: string[], page: number, pageSize: number): Promise<ApiResponse<FixRemittanceCodeListGetV30Response>> {
    if (ccAccountId == null) {
      throw new ApiException("Missing the required parameter 'ccAccountId' when calling openApiV30FixRemittanceCodeListGetGet");
    }

    if (accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling openApiV30FixRemittanceCodeListGetGet");
    }

    if (remittanceCodeList == null) {
      throw new ApiException("Missing the required parameter 'remittanceCodeList' when calling openApiV30FixRemittanceCodeListGetGet");
    }
    return this.apiClient.requestWithHttpInfo<FixRemittanceCodeListGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/fix_remittance_code/list/get/",
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


