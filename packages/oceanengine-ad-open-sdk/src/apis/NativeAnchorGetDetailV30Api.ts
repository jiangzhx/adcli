// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { NativeAnchorGetDetailV30AnchorType, NativeAnchorGetDetailV30Response } from "../models";


export class NativeAnchorGetDetailV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30NativeAnchorGetDetailGet(anchorIds: string[], advertiserId: number, anchorType: NativeAnchorGetDetailV30AnchorType): Promise<NativeAnchorGetDetailV30Response> {
    const response = await this.openApiV30NativeAnchorGetDetailGetWithHttpInfo(anchorIds, advertiserId, anchorType);
    return response.data;
  }

  async openApiV30NativeAnchorGetDetailGetWithHttpInfo(anchorIds: string[], advertiserId: number, anchorType: NativeAnchorGetDetailV30AnchorType): Promise<ApiResponse<NativeAnchorGetDetailV30Response>> {
    if (anchorIds == null) {
      throw new ApiException("Missing the required parameter 'anchorIds' when calling openApiV30NativeAnchorGetDetailGet");
    }

    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30NativeAnchorGetDetailGet");
    }

    if (anchorType == null) {
      throw new ApiException("Missing the required parameter 'anchorType' when calling openApiV30NativeAnchorGetDetailGet");
    }
    return this.apiClient.requestWithHttpInfo<NativeAnchorGetDetailV30Response>({
      method: "GET",
      path: "/open_api/v3.0/native_anchor/get/detail/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "anchor_type", value: anchorType },
        { name: "anchor_ids", value: anchorIds, collectionFormat: "csv" }
      ]
    });
  }
}


