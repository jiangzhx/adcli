// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DmpCustomAudienceSelectV2Response, DmpCustomAudienceSelectV2SelectType } from "../models";


export class DmpCustomAudienceSelectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpCustomAudienceSelectGet(advertiserId: number, selectType: DmpCustomAudienceSelectV2SelectType, offset: number, limit: number): Promise<DmpCustomAudienceSelectV2Response> {
    const response = await this.openApi2DmpCustomAudienceSelectGetWithHttpInfo(advertiserId, selectType, offset, limit);
    return response.data;
  }

  async openApi2DmpCustomAudienceSelectGetWithHttpInfo(advertiserId: number, selectType: DmpCustomAudienceSelectV2SelectType, offset: number, limit: number): Promise<ApiResponse<DmpCustomAudienceSelectV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DmpCustomAudienceSelectGet");
    }
    return this.apiClient.requestWithHttpInfo<DmpCustomAudienceSelectV2Response>({
      method: "GET",
      path: "/open_api/2/dmp/custom_audience/select/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "select_type", value: selectType },
        { name: "offset", value: offset },
        { name: "limit", value: limit }
      ]
    });
  }
}


