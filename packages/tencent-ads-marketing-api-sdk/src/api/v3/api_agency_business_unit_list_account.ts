// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_agency_business_unit_list_account.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AgencyBusinessUnitListAccountGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AgencyBusinessUnitListAccountApiGetRequest {
  organizationId: number | string;
  page: number;
  pageSize: number;
  fields?: unknown;
}


export class AgencyBusinessUnitListAccountApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AgencyBusinessUnitListAccountApiGetRequest): Promise<AgencyBusinessUnitListAccountGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AgencyBusinessUnitListAccountApiGetRequest): Promise<ApiResponse<AgencyBusinessUnitListAccountGetResponseData>> {
    if (request.organizationId == null) {
      throw new ApiException("Missing the required parameter 'organizationId' when calling get");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AgencyBusinessUnitListAccountGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/agency_business_unit_list_account/get",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


