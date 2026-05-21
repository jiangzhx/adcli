// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdvertiserInfoV2Response } from "../models";


export class AdvertiserInfoV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2AdvertiserInfoGet(advertiserIds: number[], fields: string[]): Promise<AdvertiserInfoV2Response> {
    const response = await this.openApi2AdvertiserInfoGetWithHttpInfo(advertiserIds, fields);
    return response.data;
  }

  async openApi2AdvertiserInfoGetWithHttpInfo(advertiserIds: number[], fields: string[]): Promise<ApiResponse<AdvertiserInfoV2Response>> {

    return this.apiClient.requestWithHttpInfo<AdvertiserInfoV2Response>({
      method: "GET",
      path: "/open_api/2/advertiser/info/",
      queryParams: [
        { name: "advertiser_ids", value: advertiserIds, collectionFormat: "multi" },
        { name: "fields", value: fields, collectionFormat: "multi" }
      ]
    });
  }
}


