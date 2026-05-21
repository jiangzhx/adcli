// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarMcnProviderGetUnparticipatedTaskV2Response } from "../models";


export class StarMcnProviderGetUnparticipatedTaskV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarMcnProviderGetUnparticipatedTaskGet(starId: number, page: number, pageSize: number, payType: number, minCreateTimeStamp: number, maxCreateTimeStamp: number, firstClassCategory: number, secondClassCategory: number, productCategory: number, appId: string, appName: string, demandId: number, gameType: number, componentType: number, searchTags: number[], firstCategoryId: number, secondCategoryId: number): Promise<StarMcnProviderGetUnparticipatedTaskV2Response> {
    const response = await this.openApi2StarMcnProviderGetUnparticipatedTaskGetWithHttpInfo(starId, page, pageSize, payType, minCreateTimeStamp, maxCreateTimeStamp, firstClassCategory, secondClassCategory, productCategory, appId, appName, demandId, gameType, componentType, searchTags, firstCategoryId, secondCategoryId);
    return response.data;
  }

  async openApi2StarMcnProviderGetUnparticipatedTaskGetWithHttpInfo(starId: number, page: number, pageSize: number, payType: number, minCreateTimeStamp: number, maxCreateTimeStamp: number, firstClassCategory: number, secondClassCategory: number, productCategory: number, appId: string, appName: string, demandId: number, gameType: number, componentType: number, searchTags: number[], firstCategoryId: number, secondCategoryId: number): Promise<ApiResponse<StarMcnProviderGetUnparticipatedTaskV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarMcnProviderGetUnparticipatedTaskGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApi2StarMcnProviderGetUnparticipatedTaskGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarMcnProviderGetUnparticipatedTaskGet");
    }
    return this.apiClient.requestWithHttpInfo<StarMcnProviderGetUnparticipatedTaskV2Response>({
      method: "GET",
      path: "/open_api/2/star/mcn/provider_get_unparticipated_task/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "pay_type", value: payType },
        { name: "min_create_time_stamp", value: minCreateTimeStamp },
        { name: "max_create_time_stamp", value: maxCreateTimeStamp },
        { name: "first_class_category", value: firstClassCategory },
        { name: "second_class_category", value: secondClassCategory },
        { name: "product_category", value: productCategory },
        { name: "app_id", value: appId },
        { name: "app_name", value: appName },
        { name: "demand_id", value: demandId },
        { name: "game_type", value: gameType },
        { name: "component_type", value: componentType },
        { name: "first_category_id", value: firstCategoryId },
        { name: "second_category_id", value: secondCategoryId },
        { name: "search_tags", value: searchTags, collectionFormat: "csv" }
      ]
    });
  }
}


