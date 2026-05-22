// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAudienceCityV2IdType, ReportAudienceCityV2Response } from "../models";


export class ReportAudienceCityV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAudienceCityGet(advertiserId: number, endDate: string, idType: ReportAudienceCityV2IdType, ids: number[], metrics: string[], startDate: string): Promise<ReportAudienceCityV2Response> {
    const response = await this.openApi2ReportAudienceCityGetWithHttpInfo(advertiserId, endDate, idType, ids, metrics, startDate);
    return response.data;
  }

  async openApi2ReportAudienceCityGetWithHttpInfo(advertiserId: number, endDate: string, idType: ReportAudienceCityV2IdType, ids: number[], metrics: string[], startDate: string): Promise<ApiResponse<ReportAudienceCityV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceCityV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/city/",
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


