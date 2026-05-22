// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarMcnProviderGetUnparticipatedTaskV2Response } from "../models";


export interface OpenApi2StarMcnProviderGetUnparticipatedTaskGetRequest {
  starId: number | string;
  page: number;
  pageSize: number;
  payType?: number;
  minCreateTimeStamp?: number;
  maxCreateTimeStamp?: number;
  firstClassCategory?: number;
  secondClassCategory?: number;
  productCategory?: number;
  appId?: string;
  appName?: string;
  demandId?: number | string;
  gameType?: number;
  componentType?: number;
  searchTags?: number[];
  firstCategoryId?: number | string;
  secondCategoryId?: number | string;
}

export class StarMcnProviderGetUnparticipatedTaskV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetUnparticipatedTaskGet(request: OpenApi2StarMcnProviderGetUnparticipatedTaskGetRequest): Promise<StarMcnProviderGetUnparticipatedTaskV2Response> {
    const response = await this.openApi2StarMcnProviderGetUnparticipatedTaskGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarMcnProviderGetUnparticipatedTaskGetWithHttpInfo(request: OpenApi2StarMcnProviderGetUnparticipatedTaskGetRequest): Promise<ApiResponse<StarMcnProviderGetUnparticipatedTaskV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetUnparticipatedTaskGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarMcnProviderGetUnparticipatedTaskGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarMcnProviderGetUnparticipatedTaskGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetUnparticipatedTaskV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_unparticipated_task/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "pay_type", value: request.payType },
        { name: "min_create_time_stamp", value: request.minCreateTimeStamp },
        { name: "max_create_time_stamp", value: request.maxCreateTimeStamp },
        { name: "first_class_category", value: request.firstClassCategory },
        { name: "second_class_category", value: request.secondClassCategory },
        { name: "product_category", value: request.productCategory },
        { name: "app_id", value: request.appId },
        { name: "app_name", value: request.appName },
        { name: "demand_id", value: request.demandId },
        { name: "game_type", value: request.gameType },
        { name: "component_type", value: request.componentType },
        { name: "search_tags", value: request.searchTags, collectionFormat: "csv" },
        { name: "first_category_id", value: request.firstCategoryId },
        { name: "second_category_id", value: request.secondCategoryId }
      ]
    });
  }
}


