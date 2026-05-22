// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ConversionLinksGetResponseData } from "../models";

export interface V3ConversionLinksApiGetRequest {
  accountId: number | string;
  secondCategoryType: string;
  optimizationGoalStruct?: unknown;
  fields?: unknown;
}


export class V3ConversionLinksApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ConversionLinksApiGetRequest): Promise<ConversionLinksGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ConversionLinksApiGetRequest): Promise<ApiResponse<ConversionLinksGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.secondCategoryType == null) {
      throw new ApiException("Missing the required parameter 'secondCategoryType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ConversionLinksGetResponseData>({
      method: "GET",
      path: "/conversion_links/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "second_category_type", value: request.secondCategoryType },
        { name: "optimization_goal_struct", value: request.optimizationGoalStruct },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


