// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAudienceGenderV2IdType, ReportAudienceGenderV2Response } from "../models";


export interface OpenApi2ReportAudienceGenderGetRequest {
  advertiserId?: number | string;
  endDate?: string;
  idType?: ReportAudienceGenderV2IdType;
  ids?: number | string[];
  metrics?: string[];
  startDate?: string;
}

export class ReportAudienceGenderV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAudienceGenderGet(request: OpenApi2ReportAudienceGenderGetRequest): Promise<ReportAudienceGenderV2Response> {
    const response = await this.openApi2ReportAudienceGenderGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportAudienceGenderGetWithHttpInfo(request: OpenApi2ReportAudienceGenderGetRequest): Promise<ApiResponse<ReportAudienceGenderV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceGenderV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/gender/",
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


