// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessManagerRelationsGetResponseData } from "../models";

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


