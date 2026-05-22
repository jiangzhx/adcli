// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAudienceProvinceV2IdType, ReportAudienceProvinceV2Response } from "../models";


export class ReportAudienceProvinceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAudienceProvinceGet(advertiserId: number, endDate: string, idType: ReportAudienceProvinceV2IdType, ids: number[], metrics: string[], startDate: string): Promise<ReportAudienceProvinceV2Response> {
    const response = await this.openApi2ReportAudienceProvinceGetWithHttpInfo(advertiserId, endDate, idType, ids, metrics, startDate);
    return response.data;
  }

  async openApi2ReportAudienceProvinceGetWithHttpInfo(advertiserId: number, endDate: string, idType: ReportAudienceProvinceV2IdType, ids: number[], metrics: string[], startDate: string): Promise<ApiResponse<ReportAudienceProvinceV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceProvinceV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/province/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "end_date", value: endDate },
        { name: "id_type", value: idType },
        { name: "start_date", value: startDate },
        { name: "ids", value: ids, collectionFormat: "multi" },
        { name: "metrics", value: metrics, collectionFormat: "multi" }
      ]
    });
  }
}


