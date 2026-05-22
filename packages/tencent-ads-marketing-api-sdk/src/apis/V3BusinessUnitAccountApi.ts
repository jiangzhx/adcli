// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessUnitAccountGetRequest, BusinessUnitAccountGetResponseData, BusinessUnitAccountUpdateRequest, BusinessUnitAccountUpdateResponseData } from "../models";

export interface V3BusinessUnitAccountApiGetRequest {
  data: BusinessUnitAccountGetRequest;
}

export interface V3BusinessUnitAccountApiUpdateRequest {
  data: BusinessUnitAccountUpdateRequest;
}


export class V3BusinessUnitAccountApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3BusinessUnitAccountApiGetRequest): Promise<BusinessUnitAccountGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3BusinessUnitAccountApiGetRequest): Promise<ApiResponse<BusinessUnitAccountGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BusinessUnitAccountGetResponseData>({
      method: "POST",
      path: "/business_unit_account/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: V3BusinessUnitAccountApiUpdateRequest): Promise<BusinessUnitAccountUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3BusinessUnitAccountApiUpdateRequest): Promise<ApiResponse<BusinessUnitAccountUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<BusinessUnitAccountUpdateResponseData>({
      method: "POST",
      path: "/business_unit_account/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


