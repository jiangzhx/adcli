// Generated from oceanengine/ad_open_sdk_go api/api_star_order_publish_resource_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderPublishResourceV2Request, StarOrderPublishResourceV2Response } from "../models/index";


export interface StarOrderPublishResourceV2ApiOpenApi2StarOrderPublishResourcePostRequest {
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

  async openApi2StarOrderPublishResourcePost(request: StarOrderPublishResourceV2ApiOpenApi2StarOrderPublishResourcePostRequest): Promise<StarOrderPublishResourceV2Response> {
    const response = await this.openApi2StarOrderPublishResourcePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderPublishResourcePostWithHttpInfo(request: StarOrderPublishResourceV2ApiOpenApi2StarOrderPublishResourcePostRequest): Promise<ApiResponse<StarOrderPublishResourceV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderPublishResourceV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/publish_resource/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starOrderPublishResourceV2Request
    });
  }
}


