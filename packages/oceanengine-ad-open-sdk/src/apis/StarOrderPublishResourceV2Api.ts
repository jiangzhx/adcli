// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderPublishResourceV2Request, StarOrderPublishResourceV2Response } from "../models";


export interface OpenApi2StarOrderPublishResourcePostRequest {
  starOrderPublishResourceV2Request?: StarOrderPublishResourceV2Request;
}

export class StarOrderPublishResourceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderPublishResourcePost(request: OpenApi2StarOrderPublishResourcePostRequest): Promise<StarOrderPublishResourceV2Response> {
    const response = await this.openApi2StarOrderPublishResourcePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderPublishResourcePostWithHttpInfo(request: OpenApi2StarOrderPublishResourcePostRequest): Promise<ApiResponse<StarOrderPublishResourceV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderPublishResourceV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/publish_resource/",
      queryParams: [

      ],
      body: request.starOrderPublishResourceV2Request
    });
  }
}


