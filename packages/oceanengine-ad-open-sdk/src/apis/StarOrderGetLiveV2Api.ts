// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderGetLiveV2Response } from "../models";


export interface OpenApi2StarOrderGetLiveGetRequest {
  starId: number | string;
  orderIds: number | string[];
}

export class StarOrderGetLiveV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderGetLiveGet(request: OpenApi2StarOrderGetLiveGetRequest): Promise<StarOrderGetLiveV2Response> {
    const response = await this.openApi2StarOrderGetLiveGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderGetLiveGetWithHttpInfo(request: OpenApi2StarOrderGetLiveGetRequest): Promise<ApiResponse<StarOrderGetLiveV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderGetLiveGet");
    }

    if (request.orderIds == null) {
      throw new ApiException("Missing the required parameter 'orderIds' when calling openApi2StarOrderGetLiveGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderGetLiveV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/get_live/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "order_ids", value: request.orderIds, collectionFormat: "csv" }
      ]
    });
  }
}


