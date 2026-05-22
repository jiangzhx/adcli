// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderApproveResourceV2Request, StarOrderApproveResourceV2Response } from "../models";


export interface OpenApi2StarOrderApproveResourcePostRequest {
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

  async openApi2StarOrderApproveResourcePost(request: OpenApi2StarOrderApproveResourcePostRequest): Promise<StarOrderApproveResourceV2Response> {
    const response = await this.openApi2StarOrderApproveResourcePostWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarOrderApproveResourcePostWithHttpInfo(request: OpenApi2StarOrderApproveResourcePostRequest): Promise<ApiResponse<StarOrderApproveResourceV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderApproveResourceV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/approve_resource/",
      queryParams: [

      ],
      body: request.starOrderApproveResourceV2Request
    });
  }
}


