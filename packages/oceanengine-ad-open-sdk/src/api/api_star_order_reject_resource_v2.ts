// Generated from oceanengine/ad_open_sdk_go api/api_star_order_reject_resource_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderRejectResourceV2Request, StarOrderRejectResourceV2Response } from "../models/index";


export interface StarOrderRejectResourceV2ApiOpenApi2StarOrderRejectResourcePostRequest {
  starOrderRejectResourceV2Request?: StarOrderRejectResourceV2Request;
}

export class StarOrderRejectResourceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderRejectResourcePost(request: StarOrderRejectResourceV2ApiOpenApi2StarOrderRejectResourcePostRequest): Promise<StarOrderRejectResourceV2Response> {
    const response = await this.openApi2StarOrderRejectResourcePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderRejectResourcePostWithHttpInfo(request: StarOrderRejectResourceV2ApiOpenApi2StarOrderRejectResourcePostRequest): Promise<ApiResponse<StarOrderRejectResourceV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderRejectResourceV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/reject_resource/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starOrderRejectResourceV2Request
    });
  }
}


