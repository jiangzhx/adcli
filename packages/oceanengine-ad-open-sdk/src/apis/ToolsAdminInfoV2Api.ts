// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsAdminInfoV2Language, ToolsAdminInfoV2Response, ToolsAdminInfoV2SubDistrict, ToolsAdminInfoV2Version } from "../models";


export interface OpenApi2ToolsAdminInfoGetRequest {
  advertiserId: number | string;
  codes: string[];
  language: ToolsAdminInfoV2Language;
  subDistrict: ToolsAdminInfoV2SubDistrict;
  version?: ToolsAdminInfoV2Version;
}

export class ToolsAdminInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAdminInfoGet(request: OpenApi2ToolsAdminInfoGetRequest): Promise<ToolsAdminInfoV2Response> {
    const response = await this.openApi2ToolsAdminInfoGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAdminInfoGetWithHttpInfo(request: OpenApi2ToolsAdminInfoGetRequest): Promise<ApiResponse<ToolsAdminInfoV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAdminInfoGet");
    }

    if (request.codes == null) {
      throw new ApiException("Missing the required parameter 'codes' when calling openApi2ToolsAdminInfoGet");
    }

    if (request.language == null) {
      throw new ApiException("Missing the required parameter 'language' when calling openApi2ToolsAdminInfoGet");
    }

    if (request.subDistrict == null) {
      throw new ApiException("Missing the required parameter 'subDistrict' when calling openApi2ToolsAdminInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAdminInfoV2Response>({
      method: "GET",
      path: "/open_api/2/tools/admin/info/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "codes", value: request.codes, collectionFormat: "csv" },
        { name: "language", value: request.language },
        { name: "sub_district", value: request.subDistrict },
        { name: "version", value: request.version }
      ]
    });
  }
}


