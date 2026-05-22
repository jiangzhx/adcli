// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingComplexTemplateGetResponseData } from "../models";

export interface V3XijingComplexTemplateApiGetRequest {
  accountId: number | string;
  pageTemplateId: string;
  fields?: unknown;
}


export class V3XijingComplexTemplateApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3XijingComplexTemplateApiGetRequest): Promise<XijingComplexTemplateGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3XijingComplexTemplateApiGetRequest): Promise<ApiResponse<XijingComplexTemplateGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.pageTemplateId == null) {
      throw new ApiException("Missing the required parameter 'pageTemplateId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<XijingComplexTemplateGetResponseData>({
      method: "GET",
      path: "/xijing_complex_template/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "page_template_id", value: request.pageTemplateId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


