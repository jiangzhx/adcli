// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsEbpSubjectListV30FilterStatus, ToolsEbpSubjectListV30Pagination, ToolsEbpSubjectListV30QueryTypes, ToolsEbpSubjectListV30Response } from "../models";


export class ToolsEbpSubjectListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30ToolsEbpSubjectListGet(enterpriseOrganizationId: number, queryTypes: ToolsEbpSubjectListV30QueryTypes[], pagination: ToolsEbpSubjectListV30Pagination, filterCompanyId: number[], filterStatus: ToolsEbpSubjectListV30FilterStatus[], filterAccountIds: number[]): Promise<ToolsEbpSubjectListV30Response> {
    const response = await this.openApiV30ToolsEbpSubjectListGetWithHttpInfo(enterpriseOrganizationId, queryTypes, pagination, filterCompanyId, filterStatus, filterAccountIds);
    return response.data;
  }

  async openApiV30ToolsEbpSubjectListGetWithHttpInfo(enterpriseOrganizationId: number, queryTypes: ToolsEbpSubjectListV30QueryTypes[], pagination: ToolsEbpSubjectListV30Pagination, filterCompanyId: number[], filterStatus: ToolsEbpSubjectListV30FilterStatus[], filterAccountIds: number[]): Promise<ApiResponse<ToolsEbpSubjectListV30Response>> {
    if (enterpriseOrganizationId == null) {
      throw new ApiException("Missing the required parameter 'enterpriseOrganizationId' when calling openApiV30ToolsEbpSubjectListGet");
    }

    if (queryTypes == null) {
      throw new ApiException("Missing the required parameter 'queryTypes' when calling openApiV30ToolsEbpSubjectListGet");
    }

    if (pagination == null) {
      throw new ApiException("Missing the required parameter 'pagination' when calling openApiV30ToolsEbpSubjectListGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsEbpSubjectListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/tools/ebp/subject/list/",
      queryParams: [
        { name: "enterprise_organization_id", value: enterpriseOrganizationId },
        { name: "pagination", value: pagination },
        { name: "query_types", value: queryTypes, collectionFormat: "csv" },
        { name: "filter_company_id", value: filterCompanyId, collectionFormat: "csv" },
        { name: "filter_status", value: filterStatus, collectionFormat: "csv" },
        { name: "filter_account_ids", value: filterAccountIds, collectionFormat: "csv" }
      ]
    });
  }
}


