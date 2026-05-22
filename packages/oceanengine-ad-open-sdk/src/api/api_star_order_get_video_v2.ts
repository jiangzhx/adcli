// Generated from oceanengine/ad_open_sdk_go api/api_star_order_get_video_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderGetVideoV2Response } from "../models/index";


export interface StarOrderGetVideoV2ApiOpenApi2StarOrderGetVideoGetRequest {
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

  async openApi2StarOrderGetVideoGet(request: StarOrderGetVideoV2ApiOpenApi2StarOrderGetVideoGetRequest): Promise<StarOrderGetVideoV2Response> {
    const response = await this.openApi2StarOrderGetVideoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderGetVideoGetWithHttpInfo(request: StarOrderGetVideoV2ApiOpenApi2StarOrderGetVideoGetRequest): Promise<ApiResponse<StarOrderGetVideoV2Response>> {
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


