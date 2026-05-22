// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { NativeAnchorGetDetailV30AnchorType, NativeAnchorGetDetailV30Response } from "../models";


export interface OpenApiV30NativeAnchorGetDetailGetRequest {
  anchorIds: string[];
  advertiserId: number;
  anchorType: NativeAnchorGetDetailV30AnchorType;
}

export class NativeAnchorGetDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30NativeAnchorGetDetailGet(request: OpenApiV30NativeAnchorGetDetailGetRequest): Promise<NativeAnchorGetDetailV30Response> {
    const response = await this.openApiV30NativeAnchorGetDetailGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30NativeAnchorGetDetailGetWithHttpInfo(request: OpenApiV30NativeAnchorGetDetailGetRequest): Promise<ApiResponse<NativeAnchorGetDetailV30Response>> {
    if (request.anchorIds == null) {
      throw new ApiException("Missing the required parameter 'anchorIds' when calling openApiV30NativeAnchorGetDetailGet");
    }

    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30NativeAnchorGetDetailGet");
    }

    if (request.anchorType == null) {
      throw new ApiException("Missing the required parameter 'anchorType' when calling openApiV30NativeAnchorGetDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<NativeAnchorGetDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/native_anchor/get/detail/",
      queryParams: [
        { name: "anchor_ids", value: request.anchorIds, collectionFormat: "csv" },
        { name: "advertiser_id", value: request.advertiserId },
        { name: "anchor_type", value: request.anchorType }
      ]
    });
  }
}


