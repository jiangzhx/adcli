// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalCustomAudienceGetV30Response, LocalCustomAudienceGetV30TagsType } from "../models";


export class LocalCustomAudienceGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalCustomAudienceGetGet(localAccountId: number, tagsType: LocalCustomAudienceGetV30TagsType, page: number, pageSize: number): Promise<LocalCustomAudienceGetV30Response> {
    const response = await this.openApiV30LocalCustomAudienceGetGetWithHttpInfo(localAccountId, tagsType, page, pageSize);
    return response.data;
  }

  async openApiV30LocalCustomAudienceGetGetWithHttpInfo(localAccountId: number, tagsType: LocalCustomAudienceGetV30TagsType, page: number, pageSize: number): Promise<ApiResponse<LocalCustomAudienceGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalCustomAudienceGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalCustomAudienceGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/custom_audience/get/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "tags_type", value: tagsType },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


