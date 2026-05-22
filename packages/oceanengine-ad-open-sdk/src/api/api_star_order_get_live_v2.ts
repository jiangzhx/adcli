// Generated from oceanengine/ad_open_sdk_go api/api_star_order_get_live_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderGetLiveV2Response } from "../models/index";


export interface StarOrderGetLiveV2ApiOpenApi2StarOrderGetLiveGetRequest {
  starId: number | string;
  orderIds: (number | string)[];
}

export class StarOrderGetLiveV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderGetLiveGet(request: StarOrderGetLiveV2ApiOpenApi2StarOrderGetLiveGetRequest): Promise<StarOrderGetLiveV2Response> {
    const response = await this.openApi2StarOrderGetLiveGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderGetLiveGetWithHttpInfo(request: StarOrderGetLiveV2ApiOpenApi2StarOrderGetLiveGetRequest): Promise<ApiResponse<StarOrderGetLiveV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.orderIds == null) {
      throw new ApiException("orderIds is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderGetLiveV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/get_live/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "order_ids", value: request.orderIds }
      ]
    });
  }
}


