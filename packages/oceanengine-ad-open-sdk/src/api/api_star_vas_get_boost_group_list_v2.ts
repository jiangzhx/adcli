// Generated from oceanengine/ad_open_sdk_go api/api_star_vas_get_boost_group_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarVasGetBoostGroupListV2Response, StarVasGetBoostGroupListV2Status } from "../models/index";


export interface StarVasGetBoostGroupListV2ApiOpenApi2StarVasGetBoostGroupListGetRequest {
  starId: number | string;
  page: number;
  limit: number;
  status?: StarVasGetBoostGroupListV2Status;
  ltCreateTime?: number;
  gtCreateTime?: number;
  itemOrderId?: number | string;
}

export class StarVasGetBoostGroupListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasGetBoostGroupListGet(request: StarVasGetBoostGroupListV2ApiOpenApi2StarVasGetBoostGroupListGetRequest): Promise<StarVasGetBoostGroupListV2Response> {
    const response = await this.openApi2StarVasGetBoostGroupListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasGetBoostGroupListGetWithHttpInfo(request: StarVasGetBoostGroupListV2ApiOpenApi2StarVasGetBoostGroupListGetRequest): Promise<ApiResponse<StarVasGetBoostGroupListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.limit == null) {
      throw new ApiException("limit is required and must be specified");
    }

    if (request.limit != null && Number(request.limit) < 1) {
      throw new ApiException("limit must be greater than 1");
    }

    if (request.limit != null && Number(request.limit) > 30) {
      throw new ApiException("limit must be less than 30");
    }
    return this.apiClient.requestWithHttpInfo<StarVasGetBoostGroupListV2Response>({
      method: "GET",
      path: "/open_api/2/star/vas/get_boost_group_list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "page", value: request.page },
        { name: "limit", value: request.limit },
        { name: "status", value: request.status },
        { name: "lt_create_time", value: request.ltCreateTime },
        { name: "gt_create_time", value: request.gtCreateTime },
        { name: "item_order_id", value: request.itemOrderId }
      ]
    });
  }
}


