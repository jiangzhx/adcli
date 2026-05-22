// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalMultiPoiIdPoiIdsGetV30Response } from "../models";


export class LocalMultiPoiIdPoiIdsGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalMultiPoiIdPoiIdsGetGet(localAccountId: number, multiPoiIds: number[], needEnable: boolean): Promise<LocalMultiPoiIdPoiIdsGetV30Response> {
    const response = await this.openApiV30LocalMultiPoiIdPoiIdsGetGetWithHttpInfo(localAccountId, multiPoiIds, needEnable);
    return response.data;
  }

  async openApiV30LocalMultiPoiIdPoiIdsGetGetWithHttpInfo(localAccountId: number, multiPoiIds: number[], needEnable: boolean): Promise<ApiResponse<LocalMultiPoiIdPoiIdsGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalMultiPoiIdPoiIdsGetGet");
    }

    if (multiPoiIds == null) {
      throw new ApiException("Missing the required parameter 'multiPoiIds' when calling openApiV30LocalMultiPoiIdPoiIdsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalMultiPoiIdPoiIdsGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/multi_poi_id/poi_ids/get/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "need_enable", value: needEnable },
        { name: "multi_poi_ids", value: multiPoiIds, collectionFormat: "csv" }
      ]
    });
  }
}


