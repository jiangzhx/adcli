// Generated from oceanengine/ad_open_sdk_go api/api_douplus_optional_targets_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DouplusOptionalTargetsListV30Response } from "../models/index";


export interface DouplusOptionalTargetsListV30ApiOpenApiV30DouplusOptionalTargetsListGetRequest {
  awemeSecUid?: string;
  itemId?: number | string;
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

  async openApiV30DouplusOptionalTargetsListGet(request: DouplusOptionalTargetsListV30ApiOpenApiV30DouplusOptionalTargetsListGetRequest): Promise<DouplusOptionalTargetsListV30Response> {
    const response = await this.openApiV30DouplusOptionalTargetsListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DouplusOptionalTargetsListGetWithHttpInfo(request: DouplusOptionalTargetsListV30ApiOpenApiV30DouplusOptionalTargetsListGetRequest): Promise<ApiResponse<DouplusOptionalTargetsListV30Response>> {

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


