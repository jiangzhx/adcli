// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarVasGetBoostGroupListV2Response, StarVasGetBoostGroupListV2Status } from "../models";


export class StarVasGetBoostGroupListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarVasGetBoostGroupListGet(starId: number, page: number, limit: number, status: StarVasGetBoostGroupListV2Status, ltCreateTime: number, gtCreateTime: number, itemOrderId: number): Promise<StarVasGetBoostGroupListV2Response> {
    const response = await this.openApi2StarVasGetBoostGroupListGetWithHttpInfo(starId, page, limit, status, ltCreateTime, gtCreateTime, itemOrderId);
    return response.data;
  }

  async openApi2StarVasGetBoostGroupListGetWithHttpInfo(starId: number, page: number, limit: number, status: StarVasGetBoostGroupListV2Status, ltCreateTime: number, gtCreateTime: number, itemOrderId: number): Promise<ApiResponse<StarVasGetBoostGroupListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarVasGetBoostGroupListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarVasGetBoostGroupListGet");
    }

    if (limit == null) {
      throw new ApiException("Missing the required parameter 'limit' when calling openApi2StarVasGetBoostGroupListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarVasGetBoostGroupListV2Response>({
      method: "GET",
      path: "/open_api/2/star/vas/get_boost_group_list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "page", value: page },
        { name: "limit", value: limit },
        { name: "status", value: status },
        { name: "lt_create_time", value: ltCreateTime },
        { name: "gt_create_time", value: gtCreateTime },
        { name: "item_order_id", value: itemOrderId }
      ]
    });
  }
}


