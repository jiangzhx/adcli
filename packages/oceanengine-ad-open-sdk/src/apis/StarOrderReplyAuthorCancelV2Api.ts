// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderReplyAuthorCancelV2Request, StarOrderReplyAuthorCancelV2Response } from "../models";


export class StarOrderReplyAuthorCancelV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderReplyAuthorCancelPost(starOrderReplyAuthorCancelV2Request: StarOrderReplyAuthorCancelV2Request): Promise<StarOrderReplyAuthorCancelV2Response> {
    const response = await this.openApi2StarOrderReplyAuthorCancelPostWithHttpInfo(starOrderReplyAuthorCancelV2Request);
    return response.data;
  }

  async openApi2StarOrderReplyAuthorCancelPostWithHttpInfo(starOrderReplyAuthorCancelV2Request: StarOrderReplyAuthorCancelV2Request): Promise<ApiResponse<StarOrderReplyAuthorCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderReplyAuthorCancelV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/reply_author_cancel/",
      queryParams: [

      ],
      body: starOrderReplyAuthorCancelV2Request
    });
  }
}


