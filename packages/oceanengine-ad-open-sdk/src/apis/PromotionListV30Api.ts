// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionListV30Filtering, PromotionListV30IncludingMaterialAtrributes, PromotionListV30Response } from "../models";


export interface OpenApiV30PromotionListGetRequest {
  advertiserId: number | string;
  filtering?: PromotionListV30Filtering;
  fields?: string[];
  includingMaterialAtrributes?: PromotionListV30IncludingMaterialAtrributes;
  page?: number;
  pageSize?: number;
  cursor?: number;
  count?: number;
}

export class PromotionListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionListGet(request: OpenApiV30PromotionListGetRequest): Promise<PromotionListV30Response> {
    const response = await this.openApiV30PromotionListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30PromotionListGetWithHttpInfo(request: OpenApiV30PromotionListGetRequest): Promise<ApiResponse<PromotionListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30PromotionListGet");
    }
    return this.apiClient.requestWithHttpInfo<PromotionListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/promotion/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "filtering", value: request.filtering },
        { name: "fields", value: request.fields, collectionFormat: "csv" },
        { name: "including_material_atrributes", value: request.includingMaterialAtrributes },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count }
      ]
    });
  }
}


