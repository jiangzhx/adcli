// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsEbpSubjectListV30FilterStatus, ToolsEbpSubjectListV30Pagination, ToolsEbpSubjectListV30QueryTypes, ToolsEbpSubjectListV30Response } from "../models";


export interface OpenApiV30ToolsEbpSubjectListGetRequest {
  enterpriseOrganizationId: number;
  queryTypes: ToolsEbpSubjectListV30QueryTypes[];
  pagination: ToolsEbpSubjectListV30Pagination;
  filterCompanyId?: number[];
  filterStatus?: ToolsEbpSubjectListV30FilterStatus[];
  filterAccountIds?: number[];
}

export class ToolsEbpSubjectListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpSubjectListGet(request: OpenApiV30ToolsEbpSubjectListGetRequest): Promise<ToolsEbpSubjectListV30Response> {
    const response = await this.openApiV30ToolsEbpSubjectListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpSubjectListGetWithHttpInfo(request: OpenApiV30ToolsEbpSubjectListGetRequest): Promise<ApiResponse<ToolsEbpSubjectListV30Response>> {
    if (request.enterpriseOrganizationId == null) {
      throw new ApiException("Missing the required parameter 'enterpriseOrganizationId' when calling openApiV30ToolsEbpSubjectListGet");
    }

    if (request.queryTypes == null) {
      throw new ApiException("Missing the required parameter 'queryTypes' when calling openApiV30ToolsEbpSubjectListGet");
    }

    if (request.pagination == null) {
      throw new ApiException("Missing the required parameter 'pagination' when calling openApiV30ToolsEbpSubjectListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpSubjectListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/subject/list/",
      queryParams: [
        { name: "enterprise_organization_id", value: request.enterpriseOrganizationId },
        { name: "query_types", value: request.queryTypes, collectionFormat: "csv" },
        { name: "filter_company_id", value: request.filterCompanyId, collectionFormat: "csv" },
        { name: "filter_status", value: request.filterStatus, collectionFormat: "csv" },
        { name: "filter_account_ids", value: request.filterAccountIds, collectionFormat: "csv" },
        { name: "pagination", value: request.pagination }
      ]
    });
  }
}


