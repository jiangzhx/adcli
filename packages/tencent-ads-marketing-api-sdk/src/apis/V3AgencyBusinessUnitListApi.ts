// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AgencyBusinessUnitListGetResponseData } from "../models";

export interface V3AgencyBusinessUnitListApiGetRequest {
  page: number;
  pageSize: number;
  organizationId?: number | string;
  businessUnitName?: string;
  fields?: unknown;
}


export class V3AgencyBusinessUnitListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3AgencyBusinessUnitListApiGetRequest): Promise<AgencyBusinessUnitListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AgencyBusinessUnitListApiGetRequest): Promise<ApiResponse<AgencyBusinessUnitListGetResponseData>> {
    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AgencyBusinessUnitListGetResponseData>({
      method: "GET",
      path: "/agency_business_unit_list/get",
      queryParams: [
        { name: "organization_id", value: request.organizationId },
        { name: "business_unit_name", value: request.businessUnitName },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


