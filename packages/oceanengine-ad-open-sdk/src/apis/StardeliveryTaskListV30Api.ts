// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StardeliveryTaskListV30Filtering, StardeliveryTaskListV30Response } from "../models";


export class StardeliveryTaskListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskListGet(advertiserId: number, starTaskVersion: string, filtering: StardeliveryTaskListV30Filtering, page: number, pageSize: number): Promise<StardeliveryTaskListV30Response> {
    const response = await this.openApiV30StardeliveryTaskListGetWithHttpInfo(advertiserId, starTaskVersion, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30StardeliveryTaskListGetWithHttpInfo(advertiserId: number, starTaskVersion: string, filtering: StardeliveryTaskListV30Filtering, page: number, pageSize: number): Promise<ApiResponse<StardeliveryTaskListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30StardeliveryTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/stardelivery/task/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "star_task_version", value: starTaskVersion },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


