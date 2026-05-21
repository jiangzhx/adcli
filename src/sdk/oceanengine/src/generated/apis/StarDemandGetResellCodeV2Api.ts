// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarDemandGetResellCodeV2Response } from "../models";


export class StarDemandGetResellCodeV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandGetResellCodeGet(starId: number, taskId: number): Promise<StarDemandGetResellCodeV2Response> {
    const response = await this.openApi2StarDemandGetResellCodeGetWithHttpInfo(starId, taskId);
    return response.data;
  }

  async openApi2StarDemandGetResellCodeGetWithHttpInfo(starId: number, taskId: number): Promise<ApiResponse<StarDemandGetResellCodeV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandGetResellCodeGet");
    }

    if (taskId == null) {
      throw new ApiException("Missing the required parameter 'taskId' when calling openApi2StarDemandGetResellCodeGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandGetResellCodeV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/get_resell_code/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "task_id", value: taskId }
      ]
    });
  }
}


