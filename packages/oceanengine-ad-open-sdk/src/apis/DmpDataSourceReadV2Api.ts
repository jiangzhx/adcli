// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DmpDataSourceReadV2Response } from "../models";


export interface OpenApi2DmpDataSourceReadGetRequest {
  advertiserId?: number | string;
  dataSourceIdList?: string[];
}

export class DmpDataSourceReadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpDataSourceReadGet(request: OpenApi2DmpDataSourceReadGetRequest): Promise<DmpDataSourceReadV2Response> {
    const response = await this.openApi2DmpDataSourceReadGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2DmpDataSourceReadGetWithHttpInfo(request: OpenApi2DmpDataSourceReadGetRequest): Promise<ApiResponse<DmpDataSourceReadV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpDataSourceReadV2Response>({
      method: "GET",
      path: "/open_api/2/dmp/data_source/read/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "data_source_id_list", value: request.dataSourceIdList, collectionFormat: "csv" }
      ]
    });
  }
}


