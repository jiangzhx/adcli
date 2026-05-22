// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAudienceCityV2IdType, ReportAudienceCityV2Response } from "../models";


export interface OpenApi2ReportAudienceCityGetRequest {
  advertiserId?: number;
  endDate?: string;
  idType?: ReportAudienceCityV2IdType;
  ids?: number[];
  metrics?: string[];
  startDate?: string;
}

export class ReportAudienceCityV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAudienceCityGet(request: OpenApi2ReportAudienceCityGetRequest): Promise<ReportAudienceCityV2Response> {
    const response = await this.openApi2ReportAudienceCityGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportAudienceCityGetWithHttpInfo(request: OpenApi2ReportAudienceCityGetRequest): Promise<ApiResponse<ReportAudienceCityV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceCityV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/city/",
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


