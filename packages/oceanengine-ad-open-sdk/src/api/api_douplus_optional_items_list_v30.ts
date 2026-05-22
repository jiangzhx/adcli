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
      throw new ApiException("awemeSecUid is required and must be specified");
    }

    if (request.externalAction == null) {
      throw new ApiException("externalAction is required and must be specified");
    }

    if (request.awemeId == null) {
      throw new ApiException("awemeId is required and must be specified");
    }

    if (request.count == null) {
      throw new ApiException("count is required and must be specified");
    }

    if (request.count != null && Number(request.count) < 1) {
      throw new ApiException("count must be greater than 1");
    }

    if (request.count != null && Number(request.count) > 20) {
      throw new ApiException("count must be less than 20");
    }

    if (request.cursor == null) {
      throw new ApiException("cursor is required and must be specified");
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


