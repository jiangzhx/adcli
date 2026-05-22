// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DouplusOptionalTargetsListV30Response } from "../models";


export interface OpenApiV30DouplusOptionalTargetsListGetRequest {
  awemeSecUid?: string;
  itemId?: number;
  liveAwemeId?: string;
}

export class DouplusOptionalTargetsListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOptionalTargetsListGet(request: OpenApiV30DouplusOptionalTargetsListGetRequest): Promise<DouplusOptionalTargetsListV30Response> {
    const response = await this.openApiV30DouplusOptionalTargetsListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DouplusOptionalTargetsListGetWithHttpInfo(request: OpenApiV30DouplusOptionalTargetsListGetRequest): Promise<ApiResponse<DouplusOptionalTargetsListV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusOptionalTargetsListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/douplus/optional_targets/list/",
      queryParams: [
        { name: "aweme_sec_uid", value: request.awemeSecUid },
        { name: "item_id", value: request.itemId },
        { name: "live_aweme_id", value: request.liveAwemeId }
      ]
    });
  }
}


