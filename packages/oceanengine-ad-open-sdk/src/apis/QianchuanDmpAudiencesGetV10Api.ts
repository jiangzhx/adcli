// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QianchuanDmpAudiencesGetV10Response } from "../models";


export class QianchuanDmpAudiencesGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanDmpAudiencesGetGet(advertiserId: number, retargetingTagsType: number, offset: number, limit: number): Promise<QianchuanDmpAudiencesGetV10Response> {
    const response = await this.openApiV10QianchuanDmpAudiencesGetGetWithHttpInfo(advertiserId, retargetingTagsType, offset, limit);
    return response.data;
  }

  async openApiV10QianchuanDmpAudiencesGetGetWithHttpInfo(advertiserId: number, retargetingTagsType: number, offset: number, limit: number): Promise<ApiResponse<QianchuanDmpAudiencesGetV10Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanDmpAudiencesGetGet");
    }

    if (retargetingTagsType == null) {
      throw new ApiException("Missing the required parameter 'retargetingTagsType' when calling openApiV10QianchuanDmpAudiencesGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanDmpAudiencesGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/dmp/audiences/get/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "retargeting_tags_type", value: retargetingTagsType },
        { name: "offset", value: offset },
        { name: "limit", value: limit }
      ]
    });
  }
}


