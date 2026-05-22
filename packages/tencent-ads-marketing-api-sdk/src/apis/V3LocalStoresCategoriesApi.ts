// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalStoresCategoriesGetResponseData } from "../models";

export interface V3LocalStoresCategoriesApiGetRequest {
  verticalId?: number | string;
  fields?: unknown;
}


export class V3LocalStoresCategoriesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3LocalStoresCategoriesApiGetRequest): Promise<LocalStoresCategoriesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3LocalStoresCategoriesApiGetRequest): Promise<ApiResponse<LocalStoresCategoriesGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<LocalStoresCategoriesGetResponseData>({
      method: "GET",
      path: "/local_stores_categories/get",
      queryParams: [
        { name: "vertical_id", value: request.verticalId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


