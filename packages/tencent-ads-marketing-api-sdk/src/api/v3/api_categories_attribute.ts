// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_categories_attribute.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CategoriesAttributeGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface CategoriesAttributeApiGetRequest {
  verticalId: number | string;
  page: number;
  pageSize: number;
  lastCategoryIdList?: unknown;
  fields?: unknown;
}


export class CategoriesAttributeApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CategoriesAttributeApiGetRequest): Promise<CategoriesAttributeGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CategoriesAttributeApiGetRequest): Promise<ApiResponse<CategoriesAttributeGetResponseData>> {
    if (request.verticalId == null) {
      throw new ApiException("Missing the required parameter 'verticalId' when calling get");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CategoriesAttributeGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/categories_attribute/get",
      queryParams: [
        { name: "vertical_id", value: request.verticalId },
        { name: "last_category_id_list", value: request.lastCategoryIdList, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


