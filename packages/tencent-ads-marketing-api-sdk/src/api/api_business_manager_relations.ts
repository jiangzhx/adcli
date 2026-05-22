// Generated from tencentad/marketing-api-go-sdk pkg/api/api_business_manager_relations.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BusinessManagerRelationsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface BusinessManagerRelationsApiGetRequest {
  page?: number;
  pageSize?: number;
  advertiserType?: number;
  fields?: unknown;
}


export class BusinessManagerRelationsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: BusinessManagerRelationsApiGetRequest): Promise<BusinessManagerRelationsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BusinessManagerRelationsApiGetRequest): Promise<ApiResponse<BusinessManagerRelationsGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<BusinessManagerRelationsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/business_manager_relations/get",
      queryParams: [
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "advertiser_type", value: request.advertiserType },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


