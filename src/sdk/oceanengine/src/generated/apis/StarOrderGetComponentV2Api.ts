// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarOrderGetComponentV2Response } from "../models";


export class StarOrderGetComponentV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderGetComponentGet(starId: number, orderIds: number[]): Promise<StarOrderGetComponentV2Response> {
    const response = await this.openApi2StarOrderGetComponentGetWithHttpInfo(starId, orderIds);
    return response.data;
  }

  async openApi2StarOrderGetComponentGetWithHttpInfo(starId: number, orderIds: number[]): Promise<ApiResponse<StarOrderGetComponentV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderGetComponentGet");
    }

    if (orderIds == null) {
      throw new ApiException("Missing the required parameter 'orderIds' when calling openApi2StarOrderGetComponentGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderGetComponentV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/get_component/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "order_ids", value: orderIds, collectionFormat: "csv" }
      ]
    });
  }
}


