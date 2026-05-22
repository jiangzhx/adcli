// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAudienceGenderV2IdType, ReportAudienceGenderV2Response } from "../models";


export class ReportAudienceGenderV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAudienceGenderGet(advertiserId: number, endDate: string, idType: ReportAudienceGenderV2IdType, ids: number[], metrics: string[], startDate: string): Promise<ReportAudienceGenderV2Response> {
    const response = await this.openApi2ReportAudienceGenderGetWithHttpInfo(advertiserId, endDate, idType, ids, metrics, startDate);
    return response.data;
  }

  async openApi2ReportAudienceGenderGetWithHttpInfo(advertiserId: number, endDate: string, idType: ReportAudienceGenderV2IdType, ids: number[], metrics: string[], startDate: string): Promise<ApiResponse<ReportAudienceGenderV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceGenderV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/gender/",
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


