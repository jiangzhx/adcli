// Generated from oceanengine/ad_open_sdk_go api/api_qianchuan_dmp_audiences_get_v10.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QianchuanDmpAudiencesGetV10Response } from "../models/index";


export interface QianchuanDmpAudiencesGetV10ApiOpenApiV10QianchuanDmpAudiencesGetGetRequest {
  advertiserId: number | string;
  retargetingTagsType: number;
  offset?: number;
  limit?: number;
}

export class QianchuanDmpAudiencesGetV10Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV10QianchuanDmpAudiencesGetGet(request: QianchuanDmpAudiencesGetV10ApiOpenApiV10QianchuanDmpAudiencesGetGetRequest): Promise<QianchuanDmpAudiencesGetV10Response> {
    const response = await this.openApiV10QianchuanDmpAudiencesGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV10QianchuanDmpAudiencesGetGetWithHttpInfo(request: QianchuanDmpAudiencesGetV10ApiOpenApiV10QianchuanDmpAudiencesGetGetRequest): Promise<ApiResponse<QianchuanDmpAudiencesGetV10Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV10QianchuanDmpAudiencesGetGet");
    }

    if (request.retargetingTagsType == null) {
      throw new ApiException("Missing the required parameter 'retargetingTagsType' when calling openApiV10QianchuanDmpAudiencesGetGet");
    }
    return this.apiClient.requestWithHttpInfo<QianchuanDmpAudiencesGetV10Response>({
      method: "GET",
      path: "/open_api/v1.0/qianchuan/dmp/audiences/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "retargeting_tags_type", value: request.retargetingTagsType },
        { name: "offset", value: request.offset },
        { name: "limit", value: request.limit }
      ]
    });
  }
}


