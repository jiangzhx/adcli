// Generated from oceanengine/ad_open_sdk_go api/api_star_order_update_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderUpdateV2Request, StarOrderUpdateV2Response } from "../models/index";


export interface StarOrderUpdateV2ApiOpenApi2StarOrderUpdatePostRequest {
  starOrderUpdateV2Request?: StarOrderUpdateV2Request;
}

export class StarOrderUpdateV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderUpdatePost(request: StarOrderUpdateV2ApiOpenApi2StarOrderUpdatePostRequest): Promise<StarOrderUpdateV2Response> {
    const response = await this.openApi2StarOrderUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderUpdatePostWithHttpInfo(request: StarOrderUpdateV2ApiOpenApi2StarOrderUpdatePostRequest): Promise<ApiResponse<StarOrderUpdateV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderUpdateV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starOrderUpdateV2Request
    });
  }
}


