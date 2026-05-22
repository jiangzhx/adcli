// Generated from oceanengine/ad_open_sdk_go api/api_star_demander_query_cps_task_sales_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarDemanderQueryCpsTaskSalesV2Response } from "../models/index";


export interface StarDemanderQueryCpsTaskSalesV2ApiOpenApi2StarDemanderQueryCpsTaskSalesGetRequest {
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

  async openApi2StarDemanderQueryCpsTaskSalesGet(request: StarDemanderQueryCpsTaskSalesV2ApiOpenApi2StarDemanderQueryCpsTaskSalesGetRequest): Promise<StarDemanderQueryCpsTaskSalesV2Response> {
    const response = await this.openApi2StarDemanderQueryCpsTaskSalesGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemanderQueryCpsTaskSalesGetWithHttpInfo(request: StarDemanderQueryCpsTaskSalesV2ApiOpenApi2StarDemanderQueryCpsTaskSalesGetRequest): Promise<ApiResponse<StarDemanderQueryCpsTaskSalesV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.taskId == null) {
      throw new ApiException("taskId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.limit == null) {
      throw new ApiException("limit is required and must be specified");
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


