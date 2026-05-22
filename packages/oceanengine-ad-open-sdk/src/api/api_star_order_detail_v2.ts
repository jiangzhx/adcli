// Generated from oceanengine/ad_open_sdk_go api/api_star_order_detail_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderDetailV2Response } from "../models/index";


export interface StarOrderDetailV2ApiOpenApi2StarOrderDetailGetRequest {
  starId: number | string;
  orderId: number | string;
}

export class StarOrderDetailV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderDetailGet(request: StarOrderDetailV2ApiOpenApi2StarOrderDetailGetRequest): Promise<StarOrderDetailV2Response> {
    const response = await this.openApi2StarOrderDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderDetailGetWithHttpInfo(request: StarOrderDetailV2ApiOpenApi2StarOrderDetailGetRequest): Promise<ApiResponse<StarOrderDetailV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.orderId == null) {
      throw new ApiException("orderId is required and must be specified");
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


