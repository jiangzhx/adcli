// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_programmed_commponent_result.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProgrammedCommponentResultGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ProgrammedCommponentResultApiGetRequest {
  accountId: number | string;
  materialDeriveId: number | string;
  fields?: unknown;
}


export class ProgrammedCommponentResultApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ProgrammedCommponentResultApiGetRequest): Promise<ProgrammedCommponentResultGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProgrammedCommponentResultApiGetRequest): Promise<ApiResponse<ProgrammedCommponentResultGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.materialDeriveId == null) {
      throw new ApiException("Missing the required parameter 'materialDeriveId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedCommponentResultGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


