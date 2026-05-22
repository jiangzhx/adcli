// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingTemplateGetResponseData } from "../models";

export interface XijingTemplateApiGetRequest {
  accountId: number | string;
  templateId: string;
  fields?: unknown;
}


export class XijingTemplateApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: XijingTemplateApiGetRequest): Promise<XijingTemplateGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: XijingTemplateApiGetRequest): Promise<ApiResponse<XijingTemplateGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.templateId == null) {
      throw new ApiException("Missing the required parameter 'templateId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<XijingTemplateGetResponseData>({
      method: "GET",
      path: "/xijing_template/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "template_id", value: request.templateId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


