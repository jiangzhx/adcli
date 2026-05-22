// Generated from oceanengine/ad_open_sdk_go api/api_tools_ebp_subject_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsEbpSubjectListV30FilterStatus, ToolsEbpSubjectListV30Pagination, ToolsEbpSubjectListV30QueryTypes, ToolsEbpSubjectListV30Response } from "../models/index";


export interface ToolsEbpSubjectListV30ApiOpenApiV30ToolsEbpSubjectListGetRequest {
  enterpriseOrganizationId: number | string;
  queryTypes: ToolsEbpSubjectListV30QueryTypes[];
  pagination: ToolsEbpSubjectListV30Pagination;
  filterCompanyId?: (number | string)[];
  filterStatus?: ToolsEbpSubjectListV30FilterStatus[];
  filterAccountIds?: (number | string)[];
}

export class ToolsEbpSubjectListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpSubjectListGet(request: ToolsEbpSubjectListV30ApiOpenApiV30ToolsEbpSubjectListGetRequest): Promise<ToolsEbpSubjectListV30Response> {
    const response = await this.openApiV30ToolsEbpSubjectListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30ToolsEbpSubjectListGetWithHttpInfo(request: ToolsEbpSubjectListV30ApiOpenApiV30ToolsEbpSubjectListGetRequest): Promise<ApiResponse<ToolsEbpSubjectListV30Response>> {
    if (request.enterpriseOrganizationId == null) {
      throw new ApiException("enterpriseOrganizationId is required and must be specified");
    }

    if (request.queryTypes == null) {
      throw new ApiException("queryTypes is required and must be specified");
    }

    if (request.pagination == null) {
      throw new ApiException("pagination is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpSubjectListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/subject/list/",
      queryParams: [
        { name: "enterprise_organization_id", value: request.enterpriseOrganizationId },
        { name: "query_types", value: request.queryTypes },
        { name: "filter_company_id", value: request.filterCompanyId },
        { name: "filter_status", value: request.filterStatus },
        { name: "filter_account_ids", value: request.filterAccountIds },
        { name: "pagination", value: request.pagination }
      ]
    });
  }
}


