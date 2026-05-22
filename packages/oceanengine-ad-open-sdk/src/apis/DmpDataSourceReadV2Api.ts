// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DmpDataSourceReadV2Response } from "../models";


export class DmpDataSourceReadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2DmpDataSourceReadGet(advertiserId: number, dataSourceIdList: string[]): Promise<DmpDataSourceReadV2Response> {
    const response = await this.openApi2DmpDataSourceReadGetWithHttpInfo(advertiserId, dataSourceIdList);
    return response.data;
  }

  async openApi2DmpDataSourceReadGetWithHttpInfo(advertiserId: number, dataSourceIdList: string[]): Promise<ApiResponse<DmpDataSourceReadV2Response>> {

    return this.apiClient.requestWithHttpInfo<DmpDataSourceReadV2Response>({
      method: "GET",
      path: "/open_api/2/dmp/data_source/read/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "data_source_id_list", value: dataSourceIdList, collectionFormat: "multi" }
      ]
    });
  }
}


