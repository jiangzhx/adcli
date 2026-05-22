// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemanderQueryCpsTaskSalesV2Response } from "../models";


export interface OpenApi2StarDemanderQueryCpsTaskSalesGetRequest {
  starId: number | string;
  taskId: number | string;
  page: number;
  limit: number;
}

export class StarDemanderQueryCpsTaskSalesV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemanderQueryCpsTaskSalesGet(request: OpenApi2StarDemanderQueryCpsTaskSalesGetRequest): Promise<StarDemanderQueryCpsTaskSalesV2Response> {
    const response = await this.openApi2StarDemanderQueryCpsTaskSalesGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemanderQueryCpsTaskSalesGetWithHttpInfo(request: OpenApi2StarDemanderQueryCpsTaskSalesGetRequest): Promise<ApiResponse<StarDemanderQueryCpsTaskSalesV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemanderQueryCpsTaskSalesGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarDemanderQueryCpsTaskSalesGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarDemanderQueryCpsTaskSalesGet");
    }

    if (request.limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarDemanderQueryCpsTaskSalesGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemanderQueryCpsTaskSalesV2Response>({
      method: "GET",
      path: "/open_api/2/star/demander_query_cps_task_sales/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "task_id", value: request.taskId },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


