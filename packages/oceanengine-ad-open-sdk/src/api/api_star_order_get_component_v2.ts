// Generated from oceanengine/ad_open_sdk_go api/api_star_order_get_component_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderGetComponentV2Response } from "../models/index";


export interface StarOrderGetComponentV2ApiOpenApi2StarOrderGetComponentGetRequest {
  starId: number | string;
  orderIds: number | string[];
}

export class StarOrderGetComponentV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderGetComponentGet(request: StarOrderGetComponentV2ApiOpenApi2StarOrderGetComponentGetRequest): Promise<StarOrderGetComponentV2Response> {
    const response = await this.openApi2StarOrderGetComponentGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderGetComponentGetWithHttpInfo(request: StarOrderGetComponentV2ApiOpenApi2StarOrderGetComponentGetRequest): Promise<ApiResponse<StarOrderGetComponentV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderGetComponentGet");
    }

    if (request.orderIds == null) {
      throw new ApiException("Missing the required parameter 'orderIds' when calling openApi2StarOrderGetComponentGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderGetComponentV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/get_component/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "order_ids", value: request.orderIds, collectionFormat: "csv" }
      ]
    });
  }
}


