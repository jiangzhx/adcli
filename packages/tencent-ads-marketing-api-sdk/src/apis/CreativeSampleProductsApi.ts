// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CreativeSampleProductsGetResponseData } from "../models";

export interface CreativeSampleProductsApiGetRequest {
  accountId: number | string;
  productCatalogId: number | string;
  productOuterIds?: unknown;
  productSeriesId?: number | string;
  templateId?: number | string;
  templateType?: string;
  imageId?: string;
  videoId?: string;
  productFields?: unknown;
  limit?: number;
  fields?: unknown;
}


export class CreativeSampleProductsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CreativeSampleProductsApiGetRequest): Promise<CreativeSampleProductsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CreativeSampleProductsApiGetRequest): Promise<ApiResponse<CreativeSampleProductsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.productCatalogId == null) {
      throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CreativeSampleProductsGetResponseData>({
      method: "GET",
      path: "/creative_sample_products/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "product_catalog_id", value: request.productCatalogId },
        { name: "product_outer_ids", value: request.productOuterIds, collectionFormat: "multi" },
        { name: "product_series_id", value: request.productSeriesId },
        { name: "template_id", value: request.templateId },
        { name: "template_type", value: request.templateType },
        { name: "image_id", value: request.imageId },
        { name: "video_id", value: request.videoId },
        { name: "product_fields", value: request.productFields, collectionFormat: "multi" },
        { name: "limit", value: request.limit },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


