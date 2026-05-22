// Generated from oceanengine/ad_open_sdk_go api/api_dmp_custom_audience_select_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DmpCustomAudienceSelectV2Response, DmpCustomAudienceSelectV2SelectType } from "../models/index";


export interface DmpCustomAudienceSelectV2ApiOpenApi2DmpCustomAudienceSelectGetRequest {
  advertiserId: number | string;
  selectType?: DmpCustomAudienceSelectV2SelectType;
  offset?: number;
  limit?: number;
}

export class DmpCustomAudienceSelectV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpCustomAudienceSelectGet(request: DmpCustomAudienceSelectV2ApiOpenApi2DmpCustomAudienceSelectGetRequest): Promise<DmpCustomAudienceSelectV2Response> {
    const response = await this.openApi2DmpCustomAudienceSelectGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpCustomAudienceSelectGetWithHttpInfo(request: DmpCustomAudienceSelectV2ApiOpenApi2DmpCustomAudienceSelectGetRequest): Promise<ApiResponse<DmpCustomAudienceSelectV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DmpCustomAudienceSelectGet");
    }
    return this.apiClient.requestWithHttpInfo<DmpCustomAudienceSelectV2Response>({
      method: "GET",
      path: "/open_api/2/dmp/custom_audience/select/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "select_type", value: request.selectType },
        { name: "offset", value: request.offset },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


