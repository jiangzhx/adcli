// Generated from oceanengine/ad_open_sdk_go api/api_star_order_push_resource_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderPushResourceV2Request, StarOrderPushResourceV2Response } from "../models/index";


export interface StarOrderPushResourceV2ApiOpenApi2StarOrderPushResourcePostRequest {
  starOrderPushResourceV2Request?: StarOrderPushResourceV2Request;
}

export class StarOrderPushResourceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderPushResourcePost(request: StarOrderPushResourceV2ApiOpenApi2StarOrderPushResourcePostRequest): Promise<StarOrderPushResourceV2Response> {
    const response = await this.openApi2StarOrderPushResourcePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderPushResourcePostWithHttpInfo(request: StarOrderPushResourceV2ApiOpenApi2StarOrderPushResourcePostRequest): Promise<ApiResponse<StarOrderPushResourceV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderPushResourceV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/push_resource/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starOrderPushResourceV2Request
    });
  }
}


