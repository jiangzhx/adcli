// Generated from oceanengine/ad_open_sdk_go api/api_file_material_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FileMaterialListV2MaterialSource, FileMaterialListV2PropertiesFilter, FileMaterialListV2Response } from "../models/index";


export interface FileMaterialListV2ApiOpenApi2FileMaterialListGetRequest {
  advertiserId: number | string;
  materialSource: FileMaterialListV2MaterialSource;
  propertiesFilter?: FileMaterialListV2PropertiesFilter[];
  startTime?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
}

export class FileMaterialListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2FileMaterialListGet(request: FileMaterialListV2ApiOpenApi2FileMaterialListGetRequest): Promise<FileMaterialListV2Response> {
    const response = await this.openApi2FileMaterialListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2FileMaterialListGetWithHttpInfo(request: FileMaterialListV2ApiOpenApi2FileMaterialListGetRequest): Promise<ApiResponse<FileMaterialListV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.materialSource == null) {
      throw new ApiException("materialSource is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<FileMaterialListV2Response>({
      method: "GET",
      path: "/open_api/2/file/material/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "material_source", value: request.materialSource },
        { name: "properties_filter", value: request.propertiesFilter },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


