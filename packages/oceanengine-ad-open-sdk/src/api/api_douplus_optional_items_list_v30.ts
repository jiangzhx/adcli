// Generated from oceanengine/ad_open_sdk_go api/api_douplus_optional_items_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DouplusOptionalItemsListV30ExternalAction, DouplusOptionalItemsListV30Response } from "../models/index";


export interface DouplusOptionalItemsListV30ApiOpenApiV30DouplusOptionalItemsListGetRequest {
  awemeSecUid: string;
  externalAction: DouplusOptionalItemsListV30ExternalAction;
  awemeId: string;
  count: number;
  cursor: number;
}

export class DouplusOptionalItemsListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DouplusOptionalItemsListGet(request: DouplusOptionalItemsListV30ApiOpenApiV30DouplusOptionalItemsListGetRequest): Promise<DouplusOptionalItemsListV30Response> {
    const response = await this.openApiV30DouplusOptionalItemsListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DouplusOptionalItemsListGetWithHttpInfo(request: DouplusOptionalItemsListV30ApiOpenApiV30DouplusOptionalItemsListGetRequest): Promise<ApiResponse<DouplusOptionalItemsListV30Response>> {
    if (request.awemeSecUid == null) {
      throw new ApiException("Missing the required parameter 'awemeSecUid' when calling openApiV30DouplusOptionalItemsListGet");
    }

    if (request.externalAction == null) {
      throw new ApiException("Missing the required parameter 'externalAction' when calling openApiV30DouplusOptionalItemsListGet");
    }

    if (request.awemeId == null) {
      throw new ApiException("Missing the required parameter 'awemeId' when calling openApiV30DouplusOptionalItemsListGet");
    }

    if (request.count == null) {
      throw new ApiException("Missing the required parameter 'count' when calling openApiV30DouplusOptionalItemsListGet");
    }

    if (request.cursor == null) {
      throw new ApiException("Missing the required parameter 'cursor' when calling openApiV30DouplusOptionalItemsListGet");
    }
    return this.apiClient.requestWithHttpInfo<DouplusOptionalItemsListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/douplus/optional_items/list/",
      queryParams: [
        { name: "aweme_sec_uid", value: request.awemeSecUid },
        { name: "external_action", value: request.externalAction },
        { name: "aweme_id", value: request.awemeId },
        { name: "count", value: request.count },
        { name: "cursor", value: request.cursor }
      ]
    });
  }
}


