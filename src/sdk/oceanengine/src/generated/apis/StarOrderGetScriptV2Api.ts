// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarOrderGetScriptV2Response } from "../models";


export class StarOrderGetScriptV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderGetScriptGet(starId: number, orderIds: number[]): Promise<StarOrderGetScriptV2Response> {
    const response = await this.openApi2StarOrderGetScriptGetWithHttpInfo(starId, orderIds);
    return response.data;
  }

  async openApi2StarOrderGetScriptGetWithHttpInfo(starId: number, orderIds: number[]): Promise<ApiResponse<StarOrderGetScriptV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderGetScriptGet");
    }

    if (orderIds == null) {
      throw new ApiException("Missing the required parameter 'orderIds' when calling openApi2StarOrderGetScriptGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderGetScriptV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/get_script/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "order_ids", value: orderIds, collectionFormat: "csv" }
      ]
    });
  }
}


