// Generated from oceanengine/ad_open_sdk_go api/api_dmp_custom_audience_read_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DmpCustomAudienceReadV2Response } from "../models/index";


export interface DmpCustomAudienceReadV2ApiOpenApi2DmpCustomAudienceReadGetRequest {
  advertiserId: number | string;
  customAudienceIds: number | string[];
}

export class DmpCustomAudienceReadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpCustomAudienceReadGet(request: DmpCustomAudienceReadV2ApiOpenApi2DmpCustomAudienceReadGetRequest): Promise<DmpCustomAudienceReadV2Response> {
    const response = await this.openApi2DmpCustomAudienceReadGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpCustomAudienceReadGetWithHttpInfo(request: DmpCustomAudienceReadV2ApiOpenApi2DmpCustomAudienceReadGetRequest): Promise<ApiResponse<DmpCustomAudienceReadV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2DmpCustomAudienceReadGet");
    }

    if (request.customAudienceIds == null) {
      throw new ApiException("Missing the required parameter 'customAudienceIds' when calling openApi2DmpCustomAudienceReadGet");
    }
    return this.apiClient.requestWithHttpInfo<DmpCustomAudienceReadV2Response>({
      method: "GET",
      path: "/open_api/2/dmp/custom_audience/read/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "custom_audience_ids", value: request.customAudienceIds, collectionFormat: "csv" }
      ]
    });
  }
}


