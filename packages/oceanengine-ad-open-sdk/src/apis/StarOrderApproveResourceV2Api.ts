// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarOrderApproveResourceV2Request, StarOrderApproveResourceV2Response } from "../models";


export class StarOrderApproveResourceV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarOrderApproveResourcePost(starOrderApproveResourceV2Request: StarOrderApproveResourceV2Request): Promise<StarOrderApproveResourceV2Response> {
    const response = await this.openApi2StarOrderApproveResourcePostWithHttpInfo(starOrderApproveResourceV2Request);
    return response.data;
  }

  async openApi2StarOrderApproveResourcePostWithHttpInfo(starOrderApproveResourceV2Request: StarOrderApproveResourceV2Request): Promise<ApiResponse<StarOrderApproveResourceV2Response>> {

    return this.apiClient.requestWithHttpInfo<StarOrderApproveResourceV2Response>({
      method: "POST",
      path: "/open_api/2/star/order/approve_resource/",
      queryParams: [

      ],
      body: starOrderApproveResourceV2Request
    });
  }
}


