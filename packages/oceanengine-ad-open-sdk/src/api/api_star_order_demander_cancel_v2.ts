// Generated from oceanengine/ad_open_sdk_go api/api_star_order_demander_cancel_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderDemanderCancelV2Request, StarOrderDemanderCancelV2Response } from "../models/index";


export interface StarOrderDemanderCancelV2ApiOpenApi2StarOrderDemanderCancelPostRequest {
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

  async openApi2StarOrderDemanderCancelPost(request: StarOrderDemanderCancelV2ApiOpenApi2StarOrderDemanderCancelPostRequest): Promise<StarOrderDemanderCancelV2Response> {
    const response = await this.openApi2StarOrderDemanderCancelPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderDemanderCancelPostWithHttpInfo(request: StarOrderDemanderCancelV2ApiOpenApi2StarOrderDemanderCancelPostRequest): Promise<ApiResponse<StarOrderDemanderCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderDemanderCancelV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/demander_cancel/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starOrderDemanderCancelV2Request
    });
  }
}


