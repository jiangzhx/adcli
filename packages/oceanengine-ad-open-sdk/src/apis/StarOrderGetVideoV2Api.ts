// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderGetVideoV2Response } from "../models";


export interface OpenApi2StarOrderGetVideoGetRequest {
  starId: number | string;
  orderIds: number | string[];
}

export class StarOrderGetVideoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderGetVideoGet(request: OpenApi2StarOrderGetVideoGetRequest): Promise<StarOrderGetVideoV2Response> {
    const response = await this.openApi2StarOrderGetVideoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderGetVideoGetWithHttpInfo(request: OpenApi2StarOrderGetVideoGetRequest): Promise<ApiResponse<StarOrderGetVideoV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderGetVideoGet");
    }

    if (request.orderIds == null) {
      throw new ApiException("Missing the required parameter 'orderIds' when calling openApi2StarOrderGetVideoGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderGetVideoV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/get_video/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "order_ids", value: request.orderIds, collectionFormat: "csv" }
      ]
    });
  }
}


