// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderRejectResourceV2Request, StarOrderRejectResourceV2Response } from "../models";


export interface OpenApi2StarOrderRejectResourcePostRequest {
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

  async openApi2StarOrderRejectResourcePost(request: OpenApi2StarOrderRejectResourcePostRequest): Promise<StarOrderRejectResourceV2Response> {
    const response = await this.openApi2StarOrderRejectResourcePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderRejectResourcePostWithHttpInfo(request: OpenApi2StarOrderRejectResourcePostRequest): Promise<ApiResponse<StarOrderRejectResourceV2Response>> {

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


