// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyBusinessUnitListAccountGetResponseData } from "../models";

export interface V3AgencyBusinessUnitListAccountApiGetRequest {
  organizationId: number | string;
  page: number;
  pageSize: number;
  fields?: unknown;
}


export class V3AgencyBusinessUnitListAccountApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3AgencyBusinessUnitListAccountApiGetRequest): Promise<AgencyBusinessUnitListAccountGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AgencyBusinessUnitListAccountApiGetRequest): Promise<ApiResponse<AgencyBusinessUnitListAccountGetResponseData>> {
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


