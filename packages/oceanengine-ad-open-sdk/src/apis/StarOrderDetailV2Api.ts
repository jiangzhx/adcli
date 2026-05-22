// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderDetailV2Response } from "../models";


export class StarOrderDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderDetailGet(starId: number, orderId: number): Promise<StarOrderDetailV2Response> {
    const response = await this.openApi2StarOrderDetailGetWithHttpInfo(starId, orderId);
    return response.data;
  }

  async openApi2StarOrderDetailGetWithHttpInfo(starId: number, orderId: number): Promise<ApiResponse<StarOrderDetailV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderDetailGet");
    }

    if (orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApi2StarOrderDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderDetailV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/detail/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "order_id", value: orderId }
      ]
    });
  }
}


