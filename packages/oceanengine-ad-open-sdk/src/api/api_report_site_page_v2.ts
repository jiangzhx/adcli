// Generated from oceanengine/ad_open_sdk_go api/api_report_site_page_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportSitePageV2InventoryType, ReportSitePageV2Response, ReportSitePageV2TimeDuration } from "../models/index";


export interface ReportSitePageV2ApiOpenApi2ReportSitePageGetRequest {
  advertiserId?: number | string;
  inventoryType?: ReportSitePageV2InventoryType;
  siteId?: string;
  timeDuration?: ReportSitePageV2TimeDuration;
}

export class ReportSitePageV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportSitePageGet(request: ReportSitePageV2ApiOpenApi2ReportSitePageGetRequest): Promise<ReportSitePageV2Response> {
    const response = await this.openApi2ReportSitePageGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportSitePageGetWithHttpInfo(request: ReportSitePageV2ApiOpenApi2ReportSitePageGetRequest): Promise<ApiResponse<ReportSitePageV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportSitePageV2Response>({
      method: "GET",
      path: "/open_api/2/report/site/page/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "inventory_type", value: request.inventoryType },
        { name: "site_id", value: request.siteId },
        { name: "time_duration", value: request.timeDuration }
      ]
    });
  }
}


