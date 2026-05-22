// Generated from oceanengine/ad_open_sdk_go api/api_local_report_audience_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalReportAudienceGetV30AudienceDimension, LocalReportAudienceGetV30DataDimension, LocalReportAudienceGetV30Filtering, LocalReportAudienceGetV30OrderType, LocalReportAudienceGetV30Response } from "../models/index";


export interface LocalReportAudienceGetV30ApiOpenApiV30LocalReportAudienceGetGetRequest {
  localAccountId: number | string;
  startDate: string;
  endDate: string;
  audienceDimension: LocalReportAudienceGetV30AudienceDimension;
  dataDimension: LocalReportAudienceGetV30DataDimension;
  fields?: string[];
  orderType?: LocalReportAudienceGetV30OrderType;
  orderField?: string;
  filtering?: LocalReportAudienceGetV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalReportAudienceGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalReportAudienceGetGet(request: LocalReportAudienceGetV30ApiOpenApiV30LocalReportAudienceGetGetRequest): Promise<LocalReportAudienceGetV30Response> {
    const response = await this.openApiV30LocalReportAudienceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalReportAudienceGetGetWithHttpInfo(request: LocalReportAudienceGetV30ApiOpenApiV30LocalReportAudienceGetGetRequest): Promise<ApiResponse<LocalReportAudienceGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }

    if (request.startDate == null) {
      throw new ApiException("startDate is required and must be specified");
    }

    if (request.endDate == null) {
      throw new ApiException("endDate is required and must be specified");
    }

    if (request.audienceDimension == null) {
      throw new ApiException("audienceDimension is required and must be specified");
    }

    if (request.dataDimension == null) {
      throw new ApiException("dataDimension is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<LocalReportAudienceGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/report/audience/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "start_date", value: request.startDate },
        { name: "end_date", value: request.endDate },
        { name: "audience_dimension", value: request.audienceDimension },
        { name: "data_dimension", value: request.dataDimension },
        { name: "fields", value: request.fields },
        { name: "order_type", value: request.orderType },
        { name: "order_field", value: request.orderField },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


