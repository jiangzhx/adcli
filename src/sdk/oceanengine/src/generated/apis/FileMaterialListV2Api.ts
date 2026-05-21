// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { FileMaterialListV2MaterialSource, FileMaterialListV2PropertiesFilter, FileMaterialListV2Response } from "../models";


export class FileMaterialListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileMaterialListGet(advertiserId: number, materialSource: FileMaterialListV2MaterialSource, propertiesFilter: FileMaterialListV2PropertiesFilter[], startTime: string, endTime: string, page: number, pageSize: number): Promise<FileMaterialListV2Response> {
    const response = await this.openApi2FileMaterialListGetWithHttpInfo(advertiserId, materialSource, propertiesFilter, startTime, endTime, page, pageSize);
    return response.data;
  }

  async openApi2FileMaterialListGetWithHttpInfo(advertiserId: number, materialSource: FileMaterialListV2MaterialSource, propertiesFilter: FileMaterialListV2PropertiesFilter[], startTime: string, endTime: string, page: number, pageSize: number): Promise<ApiResponse<FileMaterialListV2Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApi2FileMaterialListGet");
    }

    if (materialSource == null) {
      throw new ApiException("Missing the required parameter 'materialSource' when calling openApi2FileMaterialListGet");
    }
    return this.apiClient.requestWithHttpInfo<FileMaterialListV2Response>({
      method: "GET",
      path: "/open_api/2/file/material/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "material_source", value: materialSource },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "properties_filter", value: propertiesFilter, collectionFormat: "csv" }
      ]
    });
  }
}


