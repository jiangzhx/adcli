// Generated from oceanengine/ad_open_sdk_go api/api_brand_material_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandMaterialListV30CampaignFilter, BrandMaterialListV30MaterialStatus, BrandMaterialListV30OrderFilter, BrandMaterialListV30PageInfo, BrandMaterialListV30Response } from "../models/index";


export interface BrandMaterialListV30ApiOpenApiV30BrandMaterialListGetRequest {
  advertiserId: number | string;
  materialIds?: number | string[];
  materialName?: string;
  materialStatus?: BrandMaterialListV30MaterialStatus[];
  iesCoreUserId?: string;
  orderFilter?: BrandMaterialListV30OrderFilter;
  startTime?: string;
  endTime?: string;
  campaignFilter?: BrandMaterialListV30CampaignFilter;
  pageInfo?: BrandMaterialListV30PageInfo;
}

export class BrandMaterialListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandMaterialListGet(request: BrandMaterialListV30ApiOpenApiV30BrandMaterialListGetRequest): Promise<BrandMaterialListV30Response> {
    const response = await this.openApiV30BrandMaterialListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandMaterialListGetWithHttpInfo(request: BrandMaterialListV30ApiOpenApiV30BrandMaterialListGetRequest): Promise<ApiResponse<BrandMaterialListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandMaterialListGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandMaterialListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/material/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "material_ids", value: request.materialIds },
        { name: "material_name", value: request.materialName },
        { name: "material_status", value: request.materialStatus },
        { name: "ies_core_user_id", value: request.iesCoreUserId },
        { name: "order_filter", value: request.orderFilter },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "campaign_filter", value: request.campaignFilter },
        { name: "page_info", value: request.pageInfo }
      ]
    });
  }
}


