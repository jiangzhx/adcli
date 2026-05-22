// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_business_unit_account.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BusinessUnitAccountGetRequest, BusinessUnitAccountGetResponseData, BusinessUnitAccountUpdateRequest, BusinessUnitAccountUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface BusinessUnitAccountApiGetRequest {
  data: BusinessUnitAccountGetRequest;
}

export interface BusinessUnitAccountApiUpdateRequest {
  data: BusinessUnitAccountUpdateRequest;
}


export class BusinessUnitAccountApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: BusinessUnitAccountApiGetRequest): Promise<BusinessUnitAccountGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BusinessUnitAccountApiGetRequest): Promise<ApiResponse<BusinessUnitAccountGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BusinessUnitAccountGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/business_unit_account/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: BusinessUnitAccountApiUpdateRequest): Promise<BusinessUnitAccountUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: BusinessUnitAccountApiUpdateRequest): Promise<ApiResponse<BusinessUnitAccountUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<BusinessUnitAccountUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/business_unit_account/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


