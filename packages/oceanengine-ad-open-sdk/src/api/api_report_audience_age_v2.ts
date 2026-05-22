// Generated from oceanengine/ad_open_sdk_go api/api_report_audience_age_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportAudienceAgeV2IdType, ReportAudienceAgeV2Response } from "../models/index";


export interface ReportAudienceAgeV2ApiOpenApi2ReportAudienceAgeGetRequest {
  advertiserId?: number | string;
  endDate?: string;
  idType?: ReportAudienceAgeV2IdType;
  ids?: (number | string)[];
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

  async openApi2ReportAudienceAgeGet(request: ReportAudienceAgeV2ApiOpenApi2ReportAudienceAgeGetRequest): Promise<ReportAudienceAgeV2Response> {
    const response = await this.openApi2ReportAudienceAgeGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportAudienceAgeGetWithHttpInfo(request: ReportAudienceAgeV2ApiOpenApi2ReportAudienceAgeGetRequest): Promise<ApiResponse<ReportAudienceAgeV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceAgeV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/age/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "end_date", value: request.endDate },
        { name: "id_type", value: request.idType },
        { name: "ids", value: request.ids },
        { name: "metrics", value: request.metrics },
        { name: "start_date", value: request.startDate }
      ]
    });
  }
}


