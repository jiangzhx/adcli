// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OrganizationAccountRelationGetResponseData } from "../models";

export interface V3OrganizationAccountRelationApiGetRequest {
  paginationMode: string;
  accountId?: number | string;
  advertiserType?: string;
  businessUnitId?: number | string;
  cursor?: number;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class V3OrganizationAccountRelationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3OrganizationAccountRelationApiGetRequest): Promise<OrganizationAccountRelationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3OrganizationAccountRelationApiGetRequest): Promise<ApiResponse<OrganizationAccountRelationGetResponseData>> {
    if (request.paginationMode == null) {
      throw new ApiException("Missing the required parameter 'paginationMode' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<OrganizationAccountRelationGetResponseData>({
      method: "GET",
      path: "/organization_account_relation/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "advertiser_type", value: request.advertiserType },
        { name: "business_unit_id", value: request.businessUnitId },
        { name: "pagination_mode", value: request.paginationMode },
        { name: "cursor", value: request.cursor },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


