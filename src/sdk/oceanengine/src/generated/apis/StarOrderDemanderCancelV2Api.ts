// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarOrderDemanderCancelV2Request, StarOrderDemanderCancelV2Response } from "../models";


export class StarOrderDemanderCancelV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderDemanderCancelPost(starOrderDemanderCancelV2Request: StarOrderDemanderCancelV2Request): Promise<StarOrderDemanderCancelV2Response> {
    const response = await this.openApi2StarOrderDemanderCancelPostWithHttpInfo(starOrderDemanderCancelV2Request);
    return response.data;
  }

  async openApi2StarOrderDemanderCancelPostWithHttpInfo(starOrderDemanderCancelV2Request: StarOrderDemanderCancelV2Request): Promise<ApiResponse<StarOrderDemanderCancelV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderDemanderCancelV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/demander_cancel/",
      queryParams: [

      ],
      body: starOrderDemanderCancelV2Request
    });
  }
}


