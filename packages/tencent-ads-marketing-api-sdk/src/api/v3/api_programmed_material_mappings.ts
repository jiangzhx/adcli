// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_programmed_material_mappings.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProgrammedMaterialMappingsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ProgrammedMaterialMappingsApiGetRequest {
  accountId: number | string;
  dynamicCreativeId: number | string;
  fields?: unknown;
}


export class ProgrammedMaterialMappingsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ProgrammedMaterialMappingsApiGetRequest): Promise<ProgrammedMaterialMappingsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProgrammedMaterialMappingsApiGetRequest): Promise<ApiResponse<ProgrammedMaterialMappingsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dynamicCreativeId == null) {
      throw new ApiException("Missing the required parameter 'dynamicCreativeId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedMaterialMappingsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/programmed_material_mappings/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "dynamic_creative_id", value: request.dynamicCreativeId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


