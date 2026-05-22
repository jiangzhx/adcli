// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderPublishResourceV2Request, StarOrderPublishResourceV2Response } from "../models";


export class StarOrderPublishResourceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderPublishResourcePost(starOrderPublishResourceV2Request: StarOrderPublishResourceV2Request): Promise<StarOrderPublishResourceV2Response> {
    const response = await this.openApi2StarOrderPublishResourcePostWithHttpInfo(starOrderPublishResourceV2Request);
    return response.data;
  }

  async openApi2StarOrderPublishResourcePostWithHttpInfo(starOrderPublishResourceV2Request: StarOrderPublishResourceV2Request): Promise<ApiResponse<StarOrderPublishResourceV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderPublishResourceV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/publish_resource/",
      queryParams: [

      ],
      body: starOrderPublishResourceV2Request
    });
  }
}


