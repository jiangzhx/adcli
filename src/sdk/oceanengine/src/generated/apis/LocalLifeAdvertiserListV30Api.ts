// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalLifeAdvertiserListV30Filtering, LocalLifeAdvertiserListV30Response } from "../models";


export class LocalLifeAdvertiserListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalLifeAdvertiserListGet(lifeAccountId: number, filtering: LocalLifeAdvertiserListV30Filtering, page: number, pageSize: number): Promise<LocalLifeAdvertiserListV30Response> {
    const response = await this.openApiV30LocalLifeAdvertiserListGetWithHttpInfo(lifeAccountId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30LocalLifeAdvertiserListGetWithHttpInfo(lifeAccountId: number, filtering: LocalLifeAdvertiserListV30Filtering, page: number, pageSize: number): Promise<ApiResponse<LocalLifeAdvertiserListV30Response>> {
    if (lifeAccountId == null) {
      throw new ApiException("Missing the required parameter 'lifeAccountId' when calling openApiV30LocalLifeAdvertiserListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalLifeAdvertiserListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/life/advertiser/list/",
      queryParams: [
        { name: "life_account_id", value: lifeAccountId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


