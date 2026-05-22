// Generated from tencentad/marketing-api-go-sdk pkg/api/api_local_stores_categories.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalStoresCategoriesGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface LocalStoresCategoriesApiGetRequest {
  verticalId?: number | string;
  fields?: unknown;
}


export class LocalStoresCategoriesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: LocalStoresCategoriesApiGetRequest): Promise<LocalStoresCategoriesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LocalStoresCategoriesApiGetRequest): Promise<ApiResponse<LocalStoresCategoriesGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<LocalStoresCategoriesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/local_stores_categories/get",
      queryParams: [
        { name: "vertical_id", value: request.verticalId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


