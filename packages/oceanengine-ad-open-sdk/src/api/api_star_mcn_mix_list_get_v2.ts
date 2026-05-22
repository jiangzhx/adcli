// Generated from oceanengine/ad_open_sdk_go api/api_star_mcn_mix_list_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { StarMcnMixListGetV2Response } from "../models/index";


export interface StarMcnMixListGetV2ApiOpenApi2StarMcnMixListGetGetRequest {
  starId: number | string;
  demandId: number | string;
  page?: number;
  pageSize?: number;
  developerId?: number | string;
}

export class StarMcnMixListGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnMixListGetGet(request: StarMcnMixListGetV2ApiOpenApi2StarMcnMixListGetGetRequest): Promise<StarMcnMixListGetV2Response> {
    const response = await this.openApi2StarMcnMixListGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnMixListGetGetWithHttpInfo(request: StarMcnMixListGetV2ApiOpenApi2StarMcnMixListGetGetRequest): Promise<ApiResponse<StarMcnMixListGetV2Response>> {
    if (request.starId == null) {
      throw new ApiException("starId is required and must be specified");
    }

    if (request.demandId == null) {
      throw new ApiException("demandId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnMixListGetV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/mix/list/get/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "demand_id", value: request.demandId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "developer_id", value: request.developerId }
      ]
    });
  }
}


