// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarOrderGetLiveV2Response } from "../models";


export class StarOrderGetLiveV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderGetLiveGet(starId: number, orderIds: number[]): Promise<StarOrderGetLiveV2Response> {
    const response = await this.openApi2StarOrderGetLiveGetWithHttpInfo(starId, orderIds);
    return response.data;
  }

  async openApi2StarOrderGetLiveGetWithHttpInfo(starId: number, orderIds: number[]): Promise<ApiResponse<StarOrderGetLiveV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderGetLiveGet");
    }

    if (orderIds == null) {
      throw new ApiException("Missing the required parameter 'orderIds' when calling openApi2StarOrderGetLiveGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderGetLiveV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/get_live/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "order_ids", value: orderIds, collectionFormat: "csv" }
      ]
    });
  }
}


