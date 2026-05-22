// Generated from oceanengine/ad_open_sdk_go api/api_star_order_reply_author_cancel_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderReplyAuthorCancelV2Request, StarOrderReplyAuthorCancelV2Response } from "../models/index";


export interface StarOrderReplyAuthorCancelV2ApiOpenApi2StarOrderReplyAuthorCancelPostRequest {
  starOrderReplyAuthorCancelV2Request?: StarOrderReplyAuthorCancelV2Request;
}

export class StarOrderReplyAuthorCancelV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderReplyAuthorCancelPost(request: StarOrderReplyAuthorCancelV2ApiOpenApi2StarOrderReplyAuthorCancelPostRequest): Promise<StarOrderReplyAuthorCancelV2Response> {
    const response = await this.openApi2StarOrderReplyAuthorCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderReplyAuthorCancelPostWithHttpInfo(request: StarOrderReplyAuthorCancelV2ApiOpenApi2StarOrderReplyAuthorCancelPostRequest): Promise<ApiResponse<StarOrderReplyAuthorCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderReplyAuthorCancelV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/reply_author_cancel/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starOrderReplyAuthorCancelV2Request
    });
  }
}


