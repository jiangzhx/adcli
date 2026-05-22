// Generated from tencentad/marketing-api-go-sdk pkg/api/api_adq_reports_upgrade_status.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdqReportsUpgradeStatusGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

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
      basePath: TencentAdsV13Configuration.basePath,
      path: "/adq_reports_upgrade_status/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


