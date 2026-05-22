// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_agency_business_unit.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgencyBusinessUnitAddRequest, AgencyBusinessUnitAddResponseData, AgencyBusinessUnitUpdateRequest, AgencyBusinessUnitUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AgencyBusinessUnitApiAddRequest {
  data: AgencyBusinessUnitAddRequest;
}

export interface AgencyBusinessUnitApiUpdateRequest {
  data: AgencyBusinessUnitUpdateRequest;
}


export class AgencyBusinessUnitApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: AgencyBusinessUnitApiAddRequest): Promise<AgencyBusinessUnitAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: AgencyBusinessUnitApiAddRequest): Promise<ApiResponse<AgencyBusinessUnitAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<AgencyBusinessUnitAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/agency_business_unit/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: AgencyBusinessUnitApiUpdateRequest): Promise<AgencyBusinessUnitUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: AgencyBusinessUnitApiUpdateRequest): Promise<ApiResponse<AgencyBusinessUnitUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<AgencyBusinessUnitUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/agency_business_unit/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


