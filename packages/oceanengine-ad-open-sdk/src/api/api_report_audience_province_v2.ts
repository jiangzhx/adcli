// Generated from oceanengine/ad_open_sdk_go api/api_report_audience_province_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ReportAudienceProvinceV2IdType, ReportAudienceProvinceV2Response } from "../models/index";


export interface ReportAudienceProvinceV2ApiOpenApi2ReportAudienceProvinceGetRequest {
  advertiserId?: number | string;
  endDate?: string;
  idType?: ReportAudienceProvinceV2IdType;
  ids?: number | string[];
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

  async openApi2ReportAudienceProvinceGet(request: ReportAudienceProvinceV2ApiOpenApi2ReportAudienceProvinceGetRequest): Promise<ReportAudienceProvinceV2Response> {
    const response = await this.openApi2ReportAudienceProvinceGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ReportAudienceProvinceGetWithHttpInfo(request: ReportAudienceProvinceV2ApiOpenApi2ReportAudienceProvinceGetRequest): Promise<ApiResponse<ReportAudienceProvinceV2Response>> {

    return this.apiClient.requestWithHttpInfo<ReportAudienceProvinceV2Response>({
      method: "GET",
      path: "/open_api/2/report/audience/province/",
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


