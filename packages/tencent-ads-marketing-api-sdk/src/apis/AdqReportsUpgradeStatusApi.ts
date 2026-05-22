// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdqReportsUpgradeStatusGetResponseData } from "../models";

export interface AdqReportsUpgradeStatusApiGetRequest {
  accountId: number | string;
  fields?: unknown;
}


export class AdqReportsUpgradeStatusApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdqReportsUpgradeStatusApiGetRequest): Promise<AdqReportsUpgradeStatusGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdqReportsUpgradeStatusApiGetRequest): Promise<ApiResponse<AdqReportsUpgradeStatusGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdqReportsUpgradeStatusGetResponseData>({
      method: "GET",
      path: "/adq_reports_upgrade_status/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


