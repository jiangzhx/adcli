// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarDemandListV2Filtering, StarDemandListV2Response } from "../models";


export class StarDemandListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandListGet(starId: number, filtering: StarDemandListV2Filtering, page: number, pageSize: number): Promise<StarDemandListV2Response> {
    const response = await this.openApi2StarDemandListGetWithHttpInfo(starId, filtering, page, pageSize);
    return response.data;
  }

  async openApi2StarDemandListGetWithHttpInfo(starId: number, filtering: StarDemandListV2Filtering, page: number, pageSize: number): Promise<ApiResponse<StarDemandListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandListV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "filtering", value: filtering },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


