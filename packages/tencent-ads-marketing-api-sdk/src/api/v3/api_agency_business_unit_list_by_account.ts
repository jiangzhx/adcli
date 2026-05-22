// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_agency_business_unit_list_by_account.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgencyBusinessUnitListByAccountGetRequest, AgencyBusinessUnitListByAccountGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AgencyBusinessUnitListByAccountApiGetRequest {
  data: AgencyBusinessUnitListByAccountGetRequest;
}


export class AgencyBusinessUnitListByAccountApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AgencyBusinessUnitListByAccountApiGetRequest): Promise<AgencyBusinessUnitListByAccountGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AgencyBusinessUnitListByAccountApiGetRequest): Promise<ApiResponse<AgencyBusinessUnitListByAccountGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AgencyBusinessUnitListByAccountGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/agency_business_unit_list_by_account/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


