// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalReportAudienceGetV30AudienceDimension, LocalReportAudienceGetV30DataDimension, LocalReportAudienceGetV30Filtering, LocalReportAudienceGetV30OrderType, LocalReportAudienceGetV30Response } from "../models";


export class LocalReportAudienceGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalReportAudienceGetGet(localAccountId: number, startDate: string, endDate: string, audienceDimension: LocalReportAudienceGetV30AudienceDimension, dataDimension: LocalReportAudienceGetV30DataDimension, fields: string[], orderType: LocalReportAudienceGetV30OrderType, orderField: string, filtering: LocalReportAudienceGetV30Filtering, page: number, pageSize: number): Promise<LocalReportAudienceGetV30Response> {
    const response = await this.openApiV30LocalReportAudienceGetGetWithHttpInfo(localAccountId, startDate, endDate, audienceDimension, dataDimension, fields, orderType, orderField, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30LocalReportAudienceGetGetWithHttpInfo(localAccountId: number, startDate: string, endDate: string, audienceDimension: LocalReportAudienceGetV30AudienceDimension, dataDimension: LocalReportAudienceGetV30DataDimension, fields: string[], orderType: LocalReportAudienceGetV30OrderType, orderField: string, filtering: LocalReportAudienceGetV30Filtering, page: number, pageSize: number): Promise<ApiResponse<LocalReportAudienceGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalReportAudienceGetGet");
    }

    if (startDate == null) {
      throw new ApiException("Missing the required parameter 'startDate' when calling openApiV30LocalReportAudienceGetGet");
    }

    if (endDate == null) {
      throw new ApiException("Missing the required parameter 'endDate' when calling openApiV30LocalReportAudienceGetGet");
    }

    if (audienceDimension == null) {
      throw new ApiException("Missing the required parameter 'audienceDimension' when calling openApiV30LocalReportAudienceGetGet");
    }

    if (dataDimension == null) {
      throw new ApiException("Missing the required parameter 'dataDimension' when calling openApiV30LocalReportAudienceGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalReportAudienceGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/report/audience/get/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "start_date", value: startDate },
        { name: "end_date", value: endDate },
        { name: "audience_dimension", value: audienceDimension },
        { name: "data_dimension", value: dataDimension },
        { name: "order_type", value: orderType },
        { name: "order_field", value: orderField },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "fields", value: fields, collectionFormat: "csv" }
      ]
    });
  }
}


