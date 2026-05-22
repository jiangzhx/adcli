// Generated from oceanengine/ad_open_sdk_go api/api_local_life_advertiser_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalLifeAdvertiserListV30Filtering, LocalLifeAdvertiserListV30Response } from "../models/index";


export interface LocalLifeAdvertiserListV30ApiOpenApiV30LocalLifeAdvertiserListGetRequest {
  lifeAccountId: number | string;
  filtering?: LocalLifeAdvertiserListV30Filtering;
  page?: number;
  pageSize?: number;
}

export class LocalLifeAdvertiserListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalLifeAdvertiserListGet(request: LocalLifeAdvertiserListV30ApiOpenApiV30LocalLifeAdvertiserListGetRequest): Promise<LocalLifeAdvertiserListV30Response> {
    const response = await this.openApiV30LocalLifeAdvertiserListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalLifeAdvertiserListGetWithHttpInfo(request: LocalLifeAdvertiserListV30ApiOpenApiV30LocalLifeAdvertiserListGetRequest): Promise<ApiResponse<LocalLifeAdvertiserListV30Response>> {
    if (request.lifeAccountId == null) {
      throw new ApiException("lifeAccountId is required and must be specified");
    }

    if (request.lifeAccountId != null && Number(request.lifeAccountId) < 1) {
      throw new ApiException("lifeAccountId must be greater than 1");
    }
    return this.apiClient.requestWithHttpInfo<LocalLifeAdvertiserListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/life/advertiser/list/",
      queryParams: [
        { name: "life_account_id", value: request.lifeAccountId },
        { name: "filtering", value: request.filtering },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


