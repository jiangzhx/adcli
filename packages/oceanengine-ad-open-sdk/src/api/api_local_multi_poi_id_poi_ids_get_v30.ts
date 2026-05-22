// Generated from oceanengine/ad_open_sdk_go api/api_local_multi_poi_id_poi_ids_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalMultiPoiIdPoiIdsGetV30Response } from "../models/index";


export interface LocalMultiPoiIdPoiIdsGetV30ApiOpenApiV30LocalMultiPoiIdPoiIdsGetGetRequest {
  localAccountId: number | string;
  multiPoiIds: (number | string)[];
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

  async openApiV30LocalMultiPoiIdPoiIdsGetGet(request: LocalMultiPoiIdPoiIdsGetV30ApiOpenApiV30LocalMultiPoiIdPoiIdsGetGetRequest): Promise<LocalMultiPoiIdPoiIdsGetV30Response> {
    const response = await this.openApiV30LocalMultiPoiIdPoiIdsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalMultiPoiIdPoiIdsGetGetWithHttpInfo(request: LocalMultiPoiIdPoiIdsGetV30ApiOpenApiV30LocalMultiPoiIdPoiIdsGetGetRequest): Promise<ApiResponse<LocalMultiPoiIdPoiIdsGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }

    if (request.multiPoiIds == null) {
      throw new ApiException("multiPoiIds is required and must be specified");
    }

    if (request.multiPoiIds != null && request.multiPoiIds.length < 1) {
      throw new ApiException("multiPoiIds must have at least 1 elements");
    }

    if (request.multiPoiIds != null && request.multiPoiIds.length > 50) {
      throw new ApiException("multiPoiIds must have less than 50 elements");
    }
    return this.apiClient.requestWithHttpInfo<LocalMultiPoiIdPoiIdsGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/multi_poi_id/poi_ids/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "multi_poi_ids", value: request.multiPoiIds },
        { name: "need_enable", value: request.needEnable }
      ]
    });
  }
}


