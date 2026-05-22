// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentsMetadataGetResponseData } from "../models";

export interface V3ComponentsMetadataApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  fields?: unknown;
}


export class V3ComponentsMetadataApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ComponentsMetadataApiGetRequest): Promise<ComponentsMetadataGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ComponentsMetadataApiGetRequest): Promise<ApiResponse<ComponentsMetadataGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ComponentsMetadataGetResponseData>({
      method: "GET",
      path: "/components_metadata/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


