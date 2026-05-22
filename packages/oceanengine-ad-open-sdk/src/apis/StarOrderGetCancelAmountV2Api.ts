// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderGetCancelAmountV2Response } from "../models";


export class StarOrderGetCancelAmountV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderGetCancelAmountGet(starId: number, orderId: number): Promise<StarOrderGetCancelAmountV2Response> {
    const response = await this.openApi2StarOrderGetCancelAmountGetWithHttpInfo(starId, orderId);
    return response.data;
  }

  async openApi2StarOrderGetCancelAmountGetWithHttpInfo(starId: number, orderId: number): Promise<ApiResponse<StarOrderGetCancelAmountV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderGetCancelAmountGet");
    }

    if (orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApi2StarOrderGetCancelAmountGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderGetCancelAmountV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/get_cancel_amount/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "order_id", value: orderId }
      ]
    });
  }
}


