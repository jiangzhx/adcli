// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_organization_account_relation.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OrganizationAccountRelationGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface OrganizationAccountRelationApiGetRequest {
  paginationMode: string;
  accountId?: number | string;
  advertiserType?: string;
  businessUnitId?: number | string;
  cursor?: number;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class OrganizationAccountRelationApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: OrganizationAccountRelationApiGetRequest): Promise<OrganizationAccountRelationGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: OrganizationAccountRelationApiGetRequest): Promise<ApiResponse<OrganizationAccountRelationGetResponseData>> {
    if (request.paginationMode == null) {
      throw new ApiException("Missing the required parameter 'paginationMode' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<OrganizationAccountRelationGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


