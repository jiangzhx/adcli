// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SubcustomerTransferAddRequest, SubcustomerTransferAddResponseData } from "../models";

export interface V3SubcustomerTransferApiAddRequest {
  data: SubcustomerTransferAddRequest;
}


export class V3SubcustomerTransferApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3SubcustomerTransferApiAddRequest): Promise<SubcustomerTransferAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3SubcustomerTransferApiAddRequest): Promise<ApiResponse<SubcustomerTransferAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<SubcustomerTransferAddResponseData>({
      method: "POST",
      path: "/subcustomer_transfer/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


