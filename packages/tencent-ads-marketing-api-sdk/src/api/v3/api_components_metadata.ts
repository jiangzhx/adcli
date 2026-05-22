// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_components_metadata.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ComponentsMetadataGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ComponentsMetadataApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  fields?: unknown;
}


export class ComponentsMetadataApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ComponentsMetadataApiGetRequest): Promise<ComponentsMetadataGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ComponentsMetadataApiGetRequest): Promise<ApiResponse<ComponentsMetadataGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ComponentsMetadataGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


