// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { LocalPromotionListV30Filtering, LocalPromotionListV30Response } from "../models";


export class LocalPromotionListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalPromotionListGet(localAccountId: number, filtering: LocalPromotionListV30Filtering, page: number, pageSize: number): Promise<LocalPromotionListV30Response> {
    const response = await this.openApiV30LocalPromotionListGetWithHttpInfo(localAccountId, filtering, page, pageSize);
    return response.data;
  }

  async openApiV30LocalPromotionListGetWithHttpInfo(localAccountId: number, filtering: LocalPromotionListV30Filtering, page: number, pageSize: number): Promise<ApiResponse<LocalPromotionListV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalPromotionListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalPromotionListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/promotion/list/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


