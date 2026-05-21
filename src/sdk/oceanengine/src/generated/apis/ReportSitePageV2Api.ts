// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ReportSitePageV2InventoryType, ReportSitePageV2Response, ReportSitePageV2TimeDuration } from "../models";


export class ReportSitePageV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportSitePageGet(advertiserId: number, inventoryType: ReportSitePageV2InventoryType, siteId: string, timeDuration: ReportSitePageV2TimeDuration): Promise<ReportSitePageV2Response> {
    const response = await this.openApi2ReportSitePageGetWithHttpInfo(advertiserId, inventoryType, siteId, timeDuration);
    return response.data;
  }

  async openApi2ReportSitePageGetWithHttpInfo(advertiserId: number, inventoryType: ReportSitePageV2InventoryType, siteId: string, timeDuration: ReportSitePageV2TimeDuration): Promise<ApiResponse<ReportSitePageV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportSitePageV2Response>({
      method: "GET",
      path: "/open_api/2/report/site/page/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "inventory_type", value: inventoryType },
        { name: "site_id", value: siteId },
        { name: "time_duration", value: timeDuration }
      ]
    });
  }
}


