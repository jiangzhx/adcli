// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DouplusOptionalTargetsListV30Response } from "../models";


export class DouplusOptionalTargetsListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOptionalTargetsListGet(awemeSecUid: string, itemId: number, liveAwemeId: string): Promise<DouplusOptionalTargetsListV30Response> {
    const response = await this.openApiV30DouplusOptionalTargetsListGetWithHttpInfo(awemeSecUid, itemId, liveAwemeId);
    return response.data;
  }

  async openApiV30DouplusOptionalTargetsListGetWithHttpInfo(awemeSecUid: string, itemId: number, liveAwemeId: string): Promise<ApiResponse<DouplusOptionalTargetsListV30Response>> {

    return this.apiClient.requestWithHttpInfo<DouplusOptionalTargetsListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/douplus/optional_targets/list/",
      queryParams: [
        { name: "aweme_sec_uid", value: awemeSecUid },
        { name: "item_id", value: itemId },
        { name: "live_aweme_id", value: liveAwemeId }
      ]
    });
  }
}


