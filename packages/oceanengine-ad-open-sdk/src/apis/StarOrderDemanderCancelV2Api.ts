// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderDemanderCancelV2Request, StarOrderDemanderCancelV2Response } from "../models";


export interface OpenApi2StarOrderDemanderCancelPostRequest {
  starOrderDemanderCancelV2Request?: StarOrderDemanderCancelV2Request;
}

export class StarOrderDemanderCancelV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderDemanderCancelPost(request: OpenApi2StarOrderDemanderCancelPostRequest): Promise<StarOrderDemanderCancelV2Response> {
    const response = await this.openApi2StarOrderDemanderCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderDemanderCancelPostWithHttpInfo(request: OpenApi2StarOrderDemanderCancelPostRequest): Promise<ApiResponse<StarOrderDemanderCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderDemanderCancelV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/demander_cancel/",
      queryParams: [

      ],
      body: request.starOrderDemanderCancelV2Request
    });
  }
}


