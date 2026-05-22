// Generated from tencentad/marketing-api-go-sdk pkg/api/api_merge_fund_type_subcustomer_transfer.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MergeFundTypeSubcustomerTransferAddRequest, MergeFundTypeSubcustomerTransferAddResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface MergeFundTypeSubcustomerTransferApiAddRequest {
  data: MergeFundTypeSubcustomerTransferAddRequest;
}


export class MergeFundTypeSubcustomerTransferApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: MergeFundTypeSubcustomerTransferApiAddRequest): Promise<MergeFundTypeSubcustomerTransferAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: MergeFundTypeSubcustomerTransferApiAddRequest): Promise<ApiResponse<MergeFundTypeSubcustomerTransferAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MergeFundTypeSubcustomerTransferAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/merge_fund_type_subcustomer_transfer/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


