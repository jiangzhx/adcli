// Generated from oceanengine/ad_open_sdk_go api/api_local_custom_audience_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalCustomAudienceGetV30Response, LocalCustomAudienceGetV30TagsType } from "../models/index";


export interface LocalCustomAudienceGetV30ApiOpenApiV30LocalCustomAudienceGetGetRequest {
  localAccountId: number | string;
  tagsType?: LocalCustomAudienceGetV30TagsType;
  page?: number;
  pageSize?: number;
}

export class LocalCustomAudienceGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalCustomAudienceGetGet(request: LocalCustomAudienceGetV30ApiOpenApiV30LocalCustomAudienceGetGetRequest): Promise<LocalCustomAudienceGetV30Response> {
    const response = await this.openApiV30LocalCustomAudienceGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalCustomAudienceGetGetWithHttpInfo(request: LocalCustomAudienceGetV30ApiOpenApiV30LocalCustomAudienceGetGetRequest): Promise<ApiResponse<LocalCustomAudienceGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<LocalCustomAudienceGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/custom_audience/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "tags_type", value: request.tagsType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


