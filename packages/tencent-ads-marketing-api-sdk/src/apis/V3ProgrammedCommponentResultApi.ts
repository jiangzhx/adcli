// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedCommponentResultGetResponseData } from "../models";

export interface V3ProgrammedCommponentResultApiGetRequest {
  accountId: number | string;
  materialDeriveId: number | string;
  fields?: unknown;
}


export class V3ProgrammedCommponentResultApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ProgrammedCommponentResultApiGetRequest): Promise<ProgrammedCommponentResultGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ProgrammedCommponentResultApiGetRequest): Promise<ApiResponse<ProgrammedCommponentResultGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.materialDeriveId == null) {
      throw new ApiException("Missing the required parameter 'materialDeriveId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedCommponentResultGetResponseData>({
      method: "GET",
      path: "/programmed_commponent_result/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "material_derive_id", value: request.materialDeriveId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


