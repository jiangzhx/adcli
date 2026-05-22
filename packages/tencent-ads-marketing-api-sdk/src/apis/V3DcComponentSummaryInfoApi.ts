// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DcComponentSummaryInfoGetResponseData } from "../models";

export interface V3DcComponentSummaryInfoApiGetRequest {
  accountId: number | string;
  componentSummaryInsightTypeList: string[];
  dynamicCreativeId?: number | string;
  fields?: unknown;
}


export class V3DcComponentSummaryInfoApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3DcComponentSummaryInfoApiGetRequest): Promise<DcComponentSummaryInfoGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3DcComponentSummaryInfoApiGetRequest): Promise<ApiResponse<DcComponentSummaryInfoGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.componentSummaryInsightTypeList == null) {
      throw new ApiException("Missing the required parameter 'componentSummaryInsightTypeList' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DcComponentSummaryInfoGetResponseData>({
      method: "GET",
      path: "/dc_component_summary_info/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "dynamic_creative_id", value: request.dynamicCreativeId },
        { name: "component_summary_insight_type_list", value: request.componentSummaryInsightTypeList, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


