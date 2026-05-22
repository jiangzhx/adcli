// Generated from oceanengine/ad_open_sdk_go
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

  async openApi2StarOrderReplyAuthorCancelPost(request: StarOrderReplyAuthorCancelV2Request): Promise<StarOrderReplyAuthorCancelV2Response> {
    const response = await this.openApi2StarOrderReplyAuthorCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderReplyAuthorCancelPostWithHttpInfo(request: StarOrderReplyAuthorCancelV2Request): Promise<ApiResponse<StarOrderReplyAuthorCancelV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarOrderReplyAuthorCancelV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/reply_author_cancel/",
      queryParams: [

      ],
      body: request
    });
  }
}


