// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStoresAddressParsingResultGetRequest, LocalStoresAddressParsingResultGetResponseData } from "../models";

export interface V3LocalStoresAddressParsingResultApiGetRequest {
  data: LocalStoresAddressParsingResultGetRequest;
}


export class V3LocalStoresAddressParsingResultApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3LocalStoresAddressParsingResultApiGetRequest): Promise<LocalStoresAddressParsingResultGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LocalStoresAddressParsingResultApiGetRequest): Promise<ApiResponse<LocalStoresAddressParsingResultGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LocalStoresAddressParsingResultGetResponseData>({
      method: "POST",
      path: "/local_stores_address_parsing_result/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


