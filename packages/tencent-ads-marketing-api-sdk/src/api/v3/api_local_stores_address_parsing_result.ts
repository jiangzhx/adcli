// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_local_stores_address_parsing_result.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalStoresAddressParsingResultGetRequest, LocalStoresAddressParsingResultGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface LocalStoresAddressParsingResultApiGetRequest {
  data: LocalStoresAddressParsingResultGetRequest;
}


export class LocalStoresAddressParsingResultApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LocalStoresAddressParsingResultApiGetRequest): Promise<LocalStoresAddressParsingResultGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LocalStoresAddressParsingResultApiGetRequest): Promise<ApiResponse<LocalStoresAddressParsingResultGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LocalStoresAddressParsingResultGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/local_stores_address_parsing_result/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


