// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { KeywordListV30Filtering, KeywordListV30Response } from "../models";


export class KeywordListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30KeywordListGet(advertiserId: number, filtering: KeywordListV30Filtering): Promise<KeywordListV30Response> {
    const response = await this.openApiV30KeywordListGetWithHttpInfo(advertiserId, filtering);
    return response.data;
  }

  async openApiV30KeywordListGetWithHttpInfo(advertiserId: number, filtering: KeywordListV30Filtering): Promise<ApiResponse<KeywordListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30KeywordListGet");
    }

    if (filtering == null) {
      throw new ApiException("Missing the required parameter 'filtering' when calling openApiV30KeywordListGet");
    }
    return this.apiClient.requestWithHttpInfo<KeywordListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/keyword/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "filtering", value: filtering }
      ]
    });
  }
}


