// Generated from tencentad/marketing-api-go-sdk pkg/api/api_leads_form_list.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LeadsFormListGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface LeadsFormListApiGetRequest {
  accountId: number | string;
  beginCreatedTime?: string;
  endCreatedTime?: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class LeadsFormListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LeadsFormListApiGetRequest): Promise<LeadsFormListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LeadsFormListApiGetRequest): Promise<ApiResponse<LeadsFormListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsFormListGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/leads_form_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "begin_created_time", value: request.beginCreatedTime },
        { name: "end_created_time", value: request.endCreatedTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


