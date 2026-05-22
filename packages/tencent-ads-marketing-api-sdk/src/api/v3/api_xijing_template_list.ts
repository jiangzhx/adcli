// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_xijing_template_list.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { XijingTemplateListGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface XijingTemplateListApiGetRequest {
  accountId: number | string;
  pageTemplateId: string;
  isInteraction?: boolean;
  isPublic?: boolean;
  templateSource?: string;
  pageSize?: number;
  page?: number;
  fields?: unknown;
}


export class XijingTemplateListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: XijingTemplateListApiGetRequest): Promise<XijingTemplateListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: XijingTemplateListApiGetRequest): Promise<ApiResponse<XijingTemplateListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.pageTemplateId == null) {
      throw new ApiException("Missing the required parameter 'pageTemplateId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<XijingTemplateListGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/xijing_template_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "page_template_id", value: request.pageTemplateId },
        { name: "is_interaction", value: request.isInteraction },
        { name: "is_public", value: request.isPublic },
        { name: "template_source", value: request.templateSource },
        { name: "page_size", value: request.pageSize },
        { name: "page", value: request.page },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


