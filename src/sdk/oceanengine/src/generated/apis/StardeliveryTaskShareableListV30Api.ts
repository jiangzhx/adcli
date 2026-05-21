// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StardeliveryTaskShareableListV30Response } from "../models";


export class StardeliveryTaskShareableListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30StardeliveryTaskShareableListGet(advertiserId: number, page: number, pageSize: number): Promise<StardeliveryTaskShareableListV30Response> {
    const response = await this.openApiV30StardeliveryTaskShareableListGetWithHttpInfo(advertiserId, page, pageSize);
    return response.data;
  }

  async openApiV30StardeliveryTaskShareableListGetWithHttpInfo(advertiserId: number, page: number, pageSize: number): Promise<ApiResponse<StardeliveryTaskShareableListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30StardeliveryTaskShareableListGet");
    }
    return this.apiClient.requestWithHttpInfo<StardeliveryTaskShareableListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/stardelivery/task/shareable/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


