// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_business_unit.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BusinessUnitAddRequest, BusinessUnitAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface BusinessUnitApiAddRequest {
  data: BusinessUnitAddRequest;
}


export class BusinessUnitApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: BusinessUnitApiAddRequest): Promise<BusinessUnitAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: BusinessUnitApiAddRequest): Promise<ApiResponse<BusinessUnitAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<BusinessUnitAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/business_unit/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


