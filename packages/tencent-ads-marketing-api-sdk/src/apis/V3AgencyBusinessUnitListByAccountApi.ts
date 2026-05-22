// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyBusinessUnitListByAccountGetRequest, AgencyBusinessUnitListByAccountGetResponseData } from "../models";

export interface V3AgencyBusinessUnitListByAccountApiGetRequest {
  data: AgencyBusinessUnitListByAccountGetRequest;
}


export class V3AgencyBusinessUnitListByAccountApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3AgencyBusinessUnitListByAccountApiGetRequest): Promise<AgencyBusinessUnitListByAccountGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AgencyBusinessUnitListByAccountApiGetRequest): Promise<ApiResponse<AgencyBusinessUnitListByAccountGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AgencyBusinessUnitListByAccountGetResponseData>({
      method: "POST",
      path: "/agency_business_unit_list_by_account/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


