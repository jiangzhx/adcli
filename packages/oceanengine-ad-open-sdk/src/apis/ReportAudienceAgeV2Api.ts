// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAudienceAgeV2IdType, ReportAudienceAgeV2Response } from "../models";


export interface OpenApi2ReportAudienceAgeGetRequest {
  advertiserId?: number | string;
  endDate?: string;
  idType?: ReportAudienceAgeV2IdType;
  ids?: number | string[];
  metrics?: string[];
  startDate?: string;
}

export class ReportAudienceAgeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAudienceAgeGet(request: OpenApi2ReportAudienceAgeGetRequest): Promise<ReportAudienceAgeV2Response> {
    const response = await this.openApi2ReportAudienceAgeGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportAudienceAgeGetWithHttpInfo(request: OpenApi2ReportAudienceAgeGetRequest): Promise<ApiResponse<ReportAudienceAgeV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceAgeV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/age/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "end_date", value: request.endDate },
        { name: "id_type", value: request.idType },
        { name: "ids", value: request.ids, collectionFormat: "csv" },
        { name: "metrics", value: request.metrics, collectionFormat: "csv" },
        { name: "start_date", value: request.startDate }
      ]
    });
  }
}


