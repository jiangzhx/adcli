// Generated from tencentad/marketing-api-go-sdk pkg/api/api_dplabel_ad_label.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DplabelAdLabelGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface DplabelAdLabelApiGetRequest {
  accountId: number | string;
  fields?: unknown;
}


export class DplabelAdLabelApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: DplabelAdLabelApiGetRequest): Promise<DplabelAdLabelGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: DplabelAdLabelApiGetRequest): Promise<ApiResponse<DplabelAdLabelGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DplabelAdLabelGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/dplabel_ad_label/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


