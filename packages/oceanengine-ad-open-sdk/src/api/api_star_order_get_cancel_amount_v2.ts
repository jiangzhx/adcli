// Generated from oceanengine/ad_open_sdk_go api/api_star_order_get_cancel_amount_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderGetCancelAmountV2Response } from "../models/index";


export interface StarOrderGetCancelAmountV2ApiOpenApi2StarOrderGetCancelAmountGetRequest {
  starId: number | string;
  orderId: number | string;
}

export class StarOrderGetCancelAmountV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderGetCancelAmountGet(request: StarOrderGetCancelAmountV2ApiOpenApi2StarOrderGetCancelAmountGetRequest): Promise<StarOrderGetCancelAmountV2Response> {
    const response = await this.openApi2StarOrderGetCancelAmountGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderGetCancelAmountGetWithHttpInfo(request: StarOrderGetCancelAmountV2ApiOpenApi2StarOrderGetCancelAmountGetRequest): Promise<ApiResponse<StarOrderGetCancelAmountV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderGetCancelAmountGet");
    }

    if (request.orderId == null) {
      throw new ApiException("Missing the required parameter 'orderId' when calling openApi2StarOrderGetCancelAmountGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderGetCancelAmountV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/get_cancel_amount/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "order_id", value: request.orderId }
      ]
    });
  }
}


