// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReportAudienceProvinceV2IdType, ReportAudienceProvinceV2Response } from "../models";


export interface OpenApi2ReportAudienceProvinceGetRequest {
  advertiserId?: number;
  endDate?: string;
  idType?: ReportAudienceProvinceV2IdType;
  ids?: number[];
  metrics?: string[];
  startDate?: string;
}

export class ReportAudienceProvinceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ReportAudienceProvinceGet(request: OpenApi2ReportAudienceProvinceGetRequest): Promise<ReportAudienceProvinceV2Response> {
    const response = await this.openApi2ReportAudienceProvinceGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportAudienceProvinceGetWithHttpInfo(request: OpenApi2ReportAudienceProvinceGetRequest): Promise<ApiResponse<ReportAudienceProvinceV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceProvinceV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/province/",
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


