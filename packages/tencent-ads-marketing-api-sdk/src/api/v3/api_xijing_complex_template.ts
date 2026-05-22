// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_xijing_complex_template.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { XijingComplexTemplateGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface XijingComplexTemplateApiGetRequest {
  accountId: number | string;
  pageTemplateId: string;
  fields?: unknown;
}


export class XijingComplexTemplateApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: XijingComplexTemplateApiGetRequest): Promise<XijingComplexTemplateGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: XijingComplexTemplateApiGetRequest): Promise<ApiResponse<XijingComplexTemplateGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.pageTemplateId == null) {
      throw new ApiException("Missing the required parameter 'pageTemplateId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<XijingComplexTemplateGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


