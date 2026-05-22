// Generated from oceanengine/ad_open_sdk_go api/api_star_order_approve_resource_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarOrderApproveResourceV2Request, StarOrderApproveResourceV2Response } from "../models/index";


export interface StarOrderApproveResourceV2ApiOpenApi2StarOrderApproveResourcePostRequest {
  starOrderApproveResourceV2Request?: StarOrderApproveResourceV2Request;
}

export class StarOrderApproveResourceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderApproveResourcePost(request: StarOrderApproveResourceV2ApiOpenApi2StarOrderApproveResourcePostRequest): Promise<StarOrderApproveResourceV2Response> {
    const response = await this.openApi2StarOrderApproveResourcePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderApproveResourcePostWithHttpInfo(request: StarOrderApproveResourceV2ApiOpenApi2StarOrderApproveResourcePostRequest): Promise<ApiResponse<StarOrderApproveResourceV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderApproveResourceV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/approve_resource/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.starOrderApproveResourceV2Request
    });
  }
}


