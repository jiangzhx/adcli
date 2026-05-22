// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessUnitAddRequest, BusinessUnitAddResponseData } from "../models";

export interface V3BusinessUnitApiAddRequest {
  data: BusinessUnitAddRequest;
}


export class V3BusinessUnitApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3BusinessUnitApiAddRequest): Promise<BusinessUnitAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3BusinessUnitApiAddRequest): Promise<ApiResponse<BusinessUnitAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<BusinessUnitAddResponseData>({
      method: "POST",
      path: "/business_unit/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


