// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ReviewElementPrereviewResultsGetRequest, ReviewElementPrereviewResultsGetResponseData } from "../models";

export interface V3ReviewElementPrereviewResultsApiGetRequest {
  data: ReviewElementPrereviewResultsGetRequest;
}


export class V3ReviewElementPrereviewResultsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ReviewElementPrereviewResultsApiGetRequest): Promise<ReviewElementPrereviewResultsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ReviewElementPrereviewResultsApiGetRequest): Promise<ApiResponse<ReviewElementPrereviewResultsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ReviewElementPrereviewResultsGetResponseData>({
      method: "POST",
      path: "/review_element_prereview_results/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


