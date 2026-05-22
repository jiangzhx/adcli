// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderGetInfoV2Response } from "../models";


export interface OpenApi2StarOrderGetInfoGetRequest {
  starId: number;
  orderIds?: number[];
}

export class StarOrderGetInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderGetInfoGet(request: OpenApi2StarOrderGetInfoGetRequest): Promise<StarOrderGetInfoV2Response> {
    const response = await this.openApi2StarOrderGetInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderGetInfoGetWithHttpInfo(request: OpenApi2StarOrderGetInfoGetRequest): Promise<ApiResponse<StarOrderGetInfoV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderGetInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderGetInfoV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/get_info/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "order_ids", value: request.orderIds, collectionFormat: "csv" }
      ]
    });
  }
}


