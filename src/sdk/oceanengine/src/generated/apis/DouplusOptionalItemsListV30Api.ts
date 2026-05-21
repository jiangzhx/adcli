// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DouplusOptionalItemsListV30ExternalAction, DouplusOptionalItemsListV30Response } from "../models";


export class DouplusOptionalItemsListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOptionalItemsListGet(awemeSecUid: string, externalAction: DouplusOptionalItemsListV30ExternalAction, awemeId: string, count: number, cursor: number): Promise<DouplusOptionalItemsListV30Response> {
    const response = await this.openApiV30DouplusOptionalItemsListGetWithHttpInfo(awemeSecUid, externalAction, awemeId, count, cursor);
    return response.data;
  }

  async openApiV30DouplusOptionalItemsListGetWithHttpInfo(awemeSecUid: string, externalAction: DouplusOptionalItemsListV30ExternalAction, awemeId: string, count: number, cursor: number): Promise<ApiResponse<DouplusOptionalItemsListV30Response>> {
    if (awemeSecUid == null) {
      throw new ApiException("Missing the required parameter 'awemeSecUid' when calling openApiV30DouplusOptionalItemsListGet");
    }

    if (externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApiV30DouplusOptionalItemsListGet");
    }

    if (awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV30DouplusOptionalItemsListGet");
    }

    if (count == null) {
      throw new ApiException("Missing the required parameter 'count' when calling openApiV30DouplusOptionalItemsListGet");
    }

    if (cursor == null) {
      throw new ApiException("Missing the required parameter 'cursor' when calling openApiV30DouplusOptionalItemsListGet");
    }
    return this.apiClient.requestWithHttpInfo<DouplusOptionalItemsListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/douplus/optional_items/list/",
      queryParams: [
        { name: "aweme_sec_uid", value: awemeSecUid },
        { name: "external_action", value: externalAction },
        { name: "aweme_id", value: awemeId },
        { name: "count", value: count },
        { name: "cursor", value: cursor }
      ]
    });
  }
}


