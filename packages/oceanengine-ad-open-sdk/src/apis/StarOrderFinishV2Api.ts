// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderFinishV2Request, StarOrderFinishV2Response } from "../models";


export class StarOrderFinishV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderFinishPost(request: StarOrderFinishV2Request): Promise<StarOrderFinishV2Response> {
    const response = await this.openApi2StarOrderFinishPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderFinishPostWithHttpInfo(request: StarOrderFinishV2Request): Promise<ApiResponse<StarOrderFinishV2Response>> {
    return this.apiClient.requestWithHttpInfo<StarOrderFinishV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/finish/",
      queryParams: [

      ],
      body: request
    });
  }
}


