// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyBusinessUnitAddRequest, AgencyBusinessUnitAddResponseData, AgencyBusinessUnitUpdateRequest, AgencyBusinessUnitUpdateResponseData } from "../models";

export interface V3AgencyBusinessUnitApiAddRequest {
  data: AgencyBusinessUnitAddRequest;
}

export interface V3AgencyBusinessUnitApiUpdateRequest {
  data: AgencyBusinessUnitUpdateRequest;
}


export class V3AgencyBusinessUnitApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3AgencyBusinessUnitApiAddRequest): Promise<AgencyBusinessUnitAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3AgencyBusinessUnitApiAddRequest): Promise<ApiResponse<AgencyBusinessUnitAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<AgencyBusinessUnitAddResponseData>({
      method: "POST",
      path: "/agency_business_unit/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: V3AgencyBusinessUnitApiUpdateRequest): Promise<AgencyBusinessUnitUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3AgencyBusinessUnitApiUpdateRequest): Promise<ApiResponse<AgencyBusinessUnitUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<AgencyBusinessUnitUpdateResponseData>({
      method: "POST",
      path: "/agency_business_unit/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


