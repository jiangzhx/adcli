// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsAdminInfoV2Language, ToolsAdminInfoV2Response, ToolsAdminInfoV2SubDistrict, ToolsAdminInfoV2Version } from "../models";


export class ToolsAdminInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAdminInfoGet(advertiserId: number, codes: string[], language: ToolsAdminInfoV2Language, subDistrict: ToolsAdminInfoV2SubDistrict, version: ToolsAdminInfoV2Version): Promise<ToolsAdminInfoV2Response> {
    const response = await this.openApi2ToolsAdminInfoGetWithHttpInfo(advertiserId, codes, language, subDistrict, version);
    return response.data;
  }

  async openApi2ToolsAdminInfoGetWithHttpInfo(advertiserId: number, codes: string[], language: ToolsAdminInfoV2Language, subDistrict: ToolsAdminInfoV2SubDistrict, version: ToolsAdminInfoV2Version): Promise<ApiResponse<ToolsAdminInfoV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2ToolsAdminInfoGet");
    }

    if (codes == null) {
      throw new ApiException("Missing the required parameter 'codes' when calling openApi2ToolsAdminInfoGet");
    }

    if (language == null) {
      throw new ApiException("Missing the required parameter 'language' when calling openApi2ToolsAdminInfoGet");
    }

    if (subDistrict == null) {
      throw new ApiException("Missing the required parameter 'subDistrict' when calling openApi2ToolsAdminInfoGet");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAdminInfoV2Response>({
      method: "GET",
      path: "/open_api/2/tools/admin/info/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "language", value: language },
        { name: "sub_district", value: subDistrict },
        { name: "version", value: version },
        { name: "codes", value: codes, collectionFormat: "csv" }
      ]
    });
  }
}


