// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_subcustomer_transfer.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SubcustomerTransferAddRequest, SubcustomerTransferAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface SubcustomerTransferApiAddRequest {
  data: SubcustomerTransferAddRequest;
}


export class SubcustomerTransferApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: SubcustomerTransferApiAddRequest): Promise<SubcustomerTransferAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: SubcustomerTransferApiAddRequest): Promise<ApiResponse<SubcustomerTransferAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<SubcustomerTransferAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/subcustomer_transfer/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


