// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DmpCustomAudienceReadV2Response } from "../models";


export class DmpCustomAudienceReadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpCustomAudienceReadGet(advertiserId: number, customAudienceIds: number[]): Promise<DmpCustomAudienceReadV2Response> {
    const response = await this.openApi2DmpCustomAudienceReadGetWithHttpInfo(advertiserId, customAudienceIds);
    return response.data;
  }

  async openApi2DmpCustomAudienceReadGetWithHttpInfo(advertiserId: number, customAudienceIds: number[]): Promise<ApiResponse<DmpCustomAudienceReadV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DmpCustomAudienceReadGet");
    }

    if (customAudienceIds == null) {
      throw new ApiException("Missing the required parameter 'customAudienceIds' when calling openApi2DmpCustomAudienceReadGet");
    }
    return this.apiClient.requestWithHttpInfo<DmpCustomAudienceReadV2Response>({
      method: "GET",
      path: "/open_api/2/dmp/custom_audience/read/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "custom_audience_ids", value: customAudienceIds, collectionFormat: "csv" }
      ]
    });
  }
}


