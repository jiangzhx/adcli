// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarOrderGetInfoV2Response } from "../models";


export class StarOrderGetInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderGetInfoGet(starId: number, orderIds: number[]): Promise<StarOrderGetInfoV2Response> {
    const response = await this.openApi2StarOrderGetInfoGetWithHttpInfo(starId, orderIds);
    return response.data;
  }

  async openApi2StarOrderGetInfoGetWithHttpInfo(starId: number, orderIds: number[]): Promise<ApiResponse<StarOrderGetInfoV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderGetInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderGetInfoV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/get_info/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "order_ids", value: orderIds, collectionFormat: "csv" }
      ]
    });
  }
}


