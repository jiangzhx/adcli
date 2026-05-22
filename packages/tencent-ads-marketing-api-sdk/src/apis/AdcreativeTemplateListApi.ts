// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativeTemplateListGetResponseData } from "../models";

export interface AdcreativeTemplateListApiGetRequest {
  accountId: number | string;
  siteSet?: string;
  campaignType?: string;
  promotedObjectType?: string;
  dynamicAbilityType?: unknown;
  isDynamicCreative?: boolean;
  wechatSceneSpecPosition?: unknown;
  adcreativeTemplateId?: number | string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class AdcreativeTemplateListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdcreativeTemplateListApiGetRequest): Promise<AdcreativeTemplateListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdcreativeTemplateListApiGetRequest): Promise<ApiResponse<AdcreativeTemplateListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativeTemplateListGetResponseData>({
      method: "GET",
      path: "/adcreative_template_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "site_set", value: request.siteSet },
        { name: "campaign_type", value: request.campaignType },
        { name: "promoted_object_type", value: request.promotedObjectType },
        { name: "dynamic_ability_type", value: request.dynamicAbilityType, collectionFormat: "multi" },
        { name: "is_dynamic_creative", value: request.isDynamicCreative },
        { name: "wechat_scene_spec_position", value: request.wechatSceneSpecPosition, collectionFormat: "multi" },
        { name: "adcreative_template_id", value: request.adcreativeTemplateId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


