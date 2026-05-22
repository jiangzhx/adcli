// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarVasGetBoostGroupListV2Response, StarVasGetBoostGroupListV2Status } from "../models";


export interface OpenApi2StarVasGetBoostGroupListGetRequest {
  starId: number;
  page: number;
  limit: number;
  status?: StarVasGetBoostGroupListV2Status;
  ltCreateTime?: number;
  gtCreateTime?: number;
  itemOrderId?: number;
}

export class StarVasGetBoostGroupListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasGetBoostGroupListGet(request: OpenApi2StarVasGetBoostGroupListGetRequest): Promise<StarVasGetBoostGroupListV2Response> {
    const response = await this.openApi2StarVasGetBoostGroupListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarVasGetBoostGroupListGetWithHttpInfo(request: OpenApi2StarVasGetBoostGroupListGetRequest): Promise<ApiResponse<StarVasGetBoostGroupListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarVasGetBoostGroupListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarVasGetBoostGroupListGet");
    }

    if (request.limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarVasGetBoostGroupListGet");
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


