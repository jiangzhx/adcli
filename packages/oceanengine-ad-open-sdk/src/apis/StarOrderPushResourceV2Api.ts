// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderPushResourceV2Request, StarOrderPushResourceV2Response } from "../models";


export class StarOrderPushResourceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderPushResourcePost(starOrderPushResourceV2Request: StarOrderPushResourceV2Request): Promise<StarOrderPushResourceV2Response> {
    const response = await this.openApi2StarOrderPushResourcePostWithHttpInfo(starOrderPushResourceV2Request);
    return response.data;
  }

  async openApi2StarOrderPushResourcePostWithHttpInfo(starOrderPushResourceV2Request: StarOrderPushResourceV2Request): Promise<ApiResponse<StarOrderPushResourceV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderPushResourceV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/push_resource/",
      queryParams: [

      ],
      body: starOrderPushResourceV2Request
    });
  }
}


