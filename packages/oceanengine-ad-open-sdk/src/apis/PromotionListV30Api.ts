// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PromotionListV30Filtering, PromotionListV30IncludingMaterialAtrributes, PromotionListV30Response } from "../models";


export class PromotionListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30PromotionListGet(advertiserId: number | string, filtering: PromotionListV30Filtering, fields: string[], includingMaterialAtrributes: PromotionListV30IncludingMaterialAtrributes, page: number, pageSize: number, cursor: number, count: number): Promise<PromotionListV30Response> {
    const response = await this.openApiV30PromotionListGetWithHttpInfo(advertiserId, filtering, fields, includingMaterialAtrributes, page, pageSize, cursor, count);
    return response.data;
  }

  async openApiV30PromotionListGetWithHttpInfo(advertiserId: number | string, filtering: PromotionListV30Filtering, fields: string[], includingMaterialAtrributes: PromotionListV30IncludingMaterialAtrributes, page: number, pageSize: number, cursor: number, count: number): Promise<ApiResponse<PromotionListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30PromotionListGet");
    }
    return this.apiClient.requestWithHttpInfo<PromotionListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/promotion/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering },
        { name: "including_material_atrributes", value: includingMaterialAtrributes },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "cursor", value: cursor },
        { name: "count", value: count },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}

