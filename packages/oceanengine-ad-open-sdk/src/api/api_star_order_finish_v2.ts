// Generated from oceanengine/ad_open_sdk_go api/api_star_order_finish_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderFinishV2Request, StarOrderFinishV2Response } from "../models/index";


export interface StarOrderFinishV2ApiOpenApi2StarOrderFinishPostRequest {
  starOrderFinishV2Request?: StarOrderFinishV2Request;
}

export class StarOrderFinishV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderFinishPost(request: StarOrderFinishV2ApiOpenApi2StarOrderFinishPostRequest): Promise<StarOrderFinishV2Response> {
    const response = await this.openApi2StarOrderFinishPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderFinishPostWithHttpInfo(request: StarOrderFinishV2ApiOpenApi2StarOrderFinishPostRequest): Promise<ApiResponse<StarOrderFinishV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderFinishV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/finish/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starOrderFinishV2Request
    });
  }
}


