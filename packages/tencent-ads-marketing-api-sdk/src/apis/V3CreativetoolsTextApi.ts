// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativetoolsTextGetResponseData } from "../models";

export interface V3CreativetoolsTextApiGetRequest {
  accountId: number | string;
  maxTextLength: number;
  adgroupId?: number | string;
  keyword?: string;
  filtering?: unknown;
  number?: number;
  categoryFirstLevel?: number;
  categorySecondLevel?: number;
  productCatalogId?: number | string;
  productOuterIds?: unknown;
  fields?: unknown;
}


export class V3CreativetoolsTextApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3CreativetoolsTextApiGetRequest): Promise<CreativetoolsTextGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3CreativetoolsTextApiGetRequest): Promise<ApiResponse<CreativetoolsTextGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.maxTextLength == null) {
      throw new ApiException("Missing the required parameter 'maxTextLength' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CreativetoolsTextGetResponseData>({
      method: "GET",
      path: "/creativetools_text/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "max_text_length", value: request.maxTextLength },
        { name: "adgroup_id", value: request.adgroupId },
        { name: "keyword", value: request.keyword },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "number", value: request.number },
        { name: "category_first_level", value: request.categoryFirstLevel },
        { name: "category_second_level", value: request.categorySecondLevel },
        { name: "product_catalog_id", value: request.productCatalogId },
        { name: "product_outer_ids", value: request.productOuterIds, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


