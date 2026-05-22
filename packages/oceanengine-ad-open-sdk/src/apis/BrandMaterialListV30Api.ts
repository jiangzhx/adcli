// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandMaterialListV30CampaignFilter, BrandMaterialListV30MaterialStatus, BrandMaterialListV30OrderFilter, BrandMaterialListV30PageInfo, BrandMaterialListV30Response } from "../models";


export class BrandMaterialListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandMaterialListGet(advertiserId: number, materialIds: number[], materialName: string, materialStatus: BrandMaterialListV30MaterialStatus[], iesCoreUserId: string, orderFilter: BrandMaterialListV30OrderFilter, startTime: string, endTime: string, campaignFilter: BrandMaterialListV30CampaignFilter, pageInfo: BrandMaterialListV30PageInfo): Promise<BrandMaterialListV30Response> {
    const response = await this.openApiV30BrandMaterialListGetWithHttpInfo(advertiserId, materialIds, materialName, materialStatus, iesCoreUserId, orderFilter, startTime, endTime, campaignFilter, pageInfo);
    return response.data;
  }

  async openApiV30BrandMaterialListGetWithHttpInfo(advertiserId: number, materialIds: number[], materialName: string, materialStatus: BrandMaterialListV30MaterialStatus[], iesCoreUserId: string, orderFilter: BrandMaterialListV30OrderFilter, startTime: string, endTime: string, campaignFilter: BrandMaterialListV30CampaignFilter, pageInfo: BrandMaterialListV30PageInfo): Promise<ApiResponse<BrandMaterialListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandMaterialListGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandMaterialListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/material/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "material_name", value: materialName },
        { name: "ies_core_user_id", value: iesCoreUserId },
        { name: "order_filter", value: orderFilter },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "campaign_filter", value: campaignFilter },
        { name: "page_info", value: pageInfo },
        { name: "material_ids", value: materialIds, collectionFormat: "csv" },
        { name: "material_status", value: materialStatus, collectionFormat: "csv" }
      ]
    });
  }
}


