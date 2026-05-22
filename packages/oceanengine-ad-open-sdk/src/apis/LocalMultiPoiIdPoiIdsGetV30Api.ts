// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalMultiPoiIdPoiIdsGetV30Response } from "../models";


export interface OpenApiV30LocalMultiPoiIdPoiIdsGetGetRequest {
  localAccountId: number;
  multiPoiIds: number[];
  needEnable?: boolean;
}

export class LocalMultiPoiIdPoiIdsGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalMultiPoiIdPoiIdsGetGet(request: OpenApiV30LocalMultiPoiIdPoiIdsGetGetRequest): Promise<LocalMultiPoiIdPoiIdsGetV30Response> {
    const response = await this.openApiV30LocalMultiPoiIdPoiIdsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalMultiPoiIdPoiIdsGetGetWithHttpInfo(request: OpenApiV30LocalMultiPoiIdPoiIdsGetGetRequest): Promise<ApiResponse<LocalMultiPoiIdPoiIdsGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalMultiPoiIdPoiIdsGetGet");
    }

    if (request.multiPoiIds == null) {
      throw new ApiException("Missing the required parameter 'multiPoiIds' when calling openApiV30LocalMultiPoiIdPoiIdsGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalMultiPoiIdPoiIdsGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/multi_poi_id/poi_ids/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "multi_poi_ids", value: request.multiPoiIds, collectionFormat: "csv" },
        { name: "need_enable", value: request.needEnable }
      ]
    });
  }
}


