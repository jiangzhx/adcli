// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StardeliveryTaskShareableListV30Response } from "../models";


export interface OpenApiV30StardeliveryTaskShareableListGetRequest {
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

  async openApiV30StardeliveryTaskShareableListGet(request: OpenApiV30StardeliveryTaskShareableListGetRequest): Promise<StardeliveryTaskShareableListV30Response> {
    const response = await this.openApiV30StardeliveryTaskShareableListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30StardeliveryTaskShareableListGetWithHttpInfo(request: OpenApiV30StardeliveryTaskShareableListGetRequest): Promise<ApiResponse<StardeliveryTaskShareableListV30Response>> {
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


