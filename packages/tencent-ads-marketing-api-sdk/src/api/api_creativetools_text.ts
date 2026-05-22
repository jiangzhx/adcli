// Generated from tencentad/marketing-api-go-sdk pkg/api/api_creativetools_text.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CreativetoolsTextGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface CreativetoolsTextApiGetRequest {
  accountId: number | string;
  maxTextLength: number;
  categoryFirstLevel?: number;
  categorySecondLevel?: number;
  keyword?: string;
  filtering?: unknown;
  number?: number;
  fields?: unknown;
}


export class CreativetoolsTextApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CreativetoolsTextApiGetRequest): Promise<CreativetoolsTextGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CreativetoolsTextApiGetRequest): Promise<ApiResponse<CreativetoolsTextGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.maxTextLength == null) {
      throw new ApiException("Missing the required parameter 'maxTextLength' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CreativetoolsTextGetResponseData>({
      method: "GET",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/creativetools_text/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "max_text_length", value: request.maxTextLength },
        { name: "category_first_level", value: request.categoryFirstLevel },
        { name: "category_second_level", value: request.categorySecondLevel },
        { name: "keyword", value: request.keyword },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "number", value: request.number },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


