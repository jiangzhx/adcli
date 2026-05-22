// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemanderQueryCpsTaskSalesV2Response } from "../models";


export class StarDemanderQueryCpsTaskSalesV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemanderQueryCpsTaskSalesGet(starId: number, taskId: number, page: number, limit: number): Promise<StarDemanderQueryCpsTaskSalesV2Response> {
    const response = await this.openApi2StarDemanderQueryCpsTaskSalesGetWithHttpInfo(starId, taskId, page, limit);
    return response.data;
  }

  async openApi2StarDemanderQueryCpsTaskSalesGetWithHttpInfo(starId: number, taskId: number, page: number, limit: number): Promise<ApiResponse<StarDemanderQueryCpsTaskSalesV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemanderQueryCpsTaskSalesGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarDemanderQueryCpsTaskSalesGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarDemanderQueryCpsTaskSalesGet");
    }

    if (limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarDemanderQueryCpsTaskSalesGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemanderQueryCpsTaskSalesV2Response>({
      method: "GET",
      path: "/open_api/2/star/demander_query_cps_task_sales/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "task_id", value: taskId },
        { name: "page", value: page },
        { name: "limit", value: limit }
      ]
    });
  }
}


