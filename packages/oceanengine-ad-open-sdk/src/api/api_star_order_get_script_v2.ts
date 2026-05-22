// Generated from oceanengine/ad_open_sdk_go api/api_star_order_get_script_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderGetScriptV2Response } from "../models/index";


export interface StarOrderGetScriptV2ApiOpenApi2StarOrderGetScriptGetRequest {
  starId: number | string;
  orderIds: number | string[];
}

export class StarOrderGetScriptV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderGetScriptGet(request: StarOrderGetScriptV2ApiOpenApi2StarOrderGetScriptGetRequest): Promise<StarOrderGetScriptV2Response> {
    const response = await this.openApi2StarOrderGetScriptGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderGetScriptGetWithHttpInfo(request: StarOrderGetScriptV2ApiOpenApi2StarOrderGetScriptGetRequest): Promise<ApiResponse<StarOrderGetScriptV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarOrderGetScriptGet");
    }

    if (request.orderIds == null) {
      throw new ApiException("Missing the required parameter 'orderIds' when calling openApi2StarOrderGetScriptGet");
    }
    return this.apiClient.requestWithHttpInfo<StarOrderGetScriptV2Response>({
      method: "GET",
      path: "/open_api/2/star/order/get_script/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "order_ids", value: request.orderIds }
      ]
    });
  }
}


