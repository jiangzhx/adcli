// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BusinessMdmAccountRelationsGetResponseData } from "../models";

export interface BusinessMdmAccountRelationsApiGetRequest {
  accountId: number | string;
  relationType: string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class BusinessMdmAccountRelationsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: BusinessMdmAccountRelationsApiGetRequest): Promise<BusinessMdmAccountRelationsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: BusinessMdmAccountRelationsApiGetRequest): Promise<ApiResponse<BusinessMdmAccountRelationsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.relationType == null) {
      throw new ApiException("Missing the required parameter 'relationType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<BusinessMdmAccountRelationsGetResponseData>({
      method: "GET",
      path: "/business_mdm_account_relations/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "relation_type", value: request.relationType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


