// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarOrderUpdateV2Request, StarOrderUpdateV2Response } from "../models";


export class StarOrderUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderUpdatePost(starOrderUpdateV2Request: StarOrderUpdateV2Request): Promise<StarOrderUpdateV2Response> {
    const response = await this.openApi2StarOrderUpdatePostWithHttpInfo(starOrderUpdateV2Request);
    return response.data;
  }

  async openApi2StarOrderUpdatePostWithHttpInfo(starOrderUpdateV2Request: StarOrderUpdateV2Request): Promise<ApiResponse<StarOrderUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/update/",
      queryParams: [

      ],
      body: starOrderUpdateV2Request
    });
  }
}


