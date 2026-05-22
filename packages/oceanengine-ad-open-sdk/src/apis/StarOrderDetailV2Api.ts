// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderDetailV2Response } from "../models";


export interface OpenApi2StarOrderDetailGetRequest {
  starId: number;
  orderId: number;
}

export class StarOrderDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderDetailGet(request: OpenApi2StarOrderDetailGetRequest): Promise<StarOrderDetailV2Response> {
    const response = await this.openApi2StarOrderDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderDetailGetWithHttpInfo(request: OpenApi2StarOrderDetailGetRequest): Promise<ApiResponse<StarOrderDetailV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderDetailGet");
    }

    if (request.orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApi2StarOrderDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderDetailV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/detail/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "order_id", value: request.orderId }
      ]
    });
  }
}


