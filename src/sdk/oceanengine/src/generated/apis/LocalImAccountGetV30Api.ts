// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalImAccountGetV30QueryLifeAccountType, LocalImAccountGetV30Response } from "../models";


export class LocalImAccountGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalImAccountGetGet(lifeAccountId: number, queryLifeAccountType: LocalImAccountGetV30QueryLifeAccountType, page: number, pageSize: number): Promise<LocalImAccountGetV30Response> {
    const response = await this.openApiV30LocalImAccountGetGetWithHttpInfo(lifeAccountId, queryLifeAccountType, page, pageSize);
    return response.data;
  }

  async openApiV30LocalImAccountGetGetWithHttpInfo(lifeAccountId: number, queryLifeAccountType: LocalImAccountGetV30QueryLifeAccountType, page: number, pageSize: number): Promise<ApiResponse<LocalImAccountGetV30Response>> {
    if (lifeAccountId == null) {
      throw new ApiException("Missing the required parameter 'lifeAccountId' when calling openApiV30LocalImAccountGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalImAccountGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/im/account/get/",
      queryParams: [
        { name: "life_account_id", value: lifeAccountId },
        { name: "query_life_account_type", value: queryLifeAccountType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


