// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedMaterialMappingsGetResponseData } from "../models";

export interface V3ProgrammedMaterialMappingsApiGetRequest {
  accountId: number | string;
  dynamicCreativeId: number | string;
  fields?: unknown;
}


export class V3ProgrammedMaterialMappingsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ProgrammedMaterialMappingsApiGetRequest): Promise<ProgrammedMaterialMappingsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ProgrammedMaterialMappingsApiGetRequest): Promise<ApiResponse<ProgrammedMaterialMappingsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dynamicCreativeId == null) {
      throw new ApiException("Missing the required parameter 'dynamicCreativeId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedMaterialMappingsGetResponseData>({
      method: "GET",
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


