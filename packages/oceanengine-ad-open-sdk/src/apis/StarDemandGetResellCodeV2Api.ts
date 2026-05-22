// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandGetResellCodeV2Response } from "../models";


export interface OpenApi2StarDemandGetResellCodeGetRequest {
  starId: number | string;
  taskId: number | string;
}

export class StarDemandGetResellCodeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandGetResellCodeGet(request: OpenApi2StarDemandGetResellCodeGetRequest): Promise<StarDemandGetResellCodeV2Response> {
    const response = await this.openApi2StarDemandGetResellCodeGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandGetResellCodeGetWithHttpInfo(request: OpenApi2StarDemandGetResellCodeGetRequest): Promise<ApiResponse<StarDemandGetResellCodeV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandGetResellCodeGet");
    }

    if (request.taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarDemandGetResellCodeGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandGetResellCodeV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/get_resell_code/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "task_id", value: request.taskId }
      ]
    });
  }
}


