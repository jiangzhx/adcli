// Generated from oceanengine/ad_open_sdk_go api/api_stardelivery_task_shareable_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StardeliveryTaskShareableListV30Response } from "../models/index";


export interface StardeliveryTaskShareableListV30ApiOpenApiV30StardeliveryTaskShareableListGetRequest {
  advertiserId: number | string;
  page?: number;
  pageSize?: number;
}

export class StardeliveryTaskShareableListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskShareableListGet(request: StardeliveryTaskShareableListV30ApiOpenApiV30StardeliveryTaskShareableListGetRequest): Promise<StardeliveryTaskShareableListV30Response> {
    const response = await this.openApiV30StardeliveryTaskShareableListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskShareableListGetWithHttpInfo(request: StardeliveryTaskShareableListV30ApiOpenApiV30StardeliveryTaskShareableListGetRequest): Promise<ApiResponse<StardeliveryTaskShareableListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30StardeliveryTaskShareableListGet");
    }
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskShareableListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/stardelivery/task/shareable/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


