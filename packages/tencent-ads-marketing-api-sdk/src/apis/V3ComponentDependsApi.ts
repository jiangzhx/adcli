// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentDependsGetResponseData } from "../models";

export interface V3ComponentDependsApiGetRequest {
  accountId: number | string;
  marketingGoal: string;
  marketingTargetType: string;
  marketingCarrierType: string;
  deliveryMode: string;
  marketingSubGoal?: string;
  automaticSiteEnabled?: boolean;
  siteSet?: unknown;
  dynamicCreativeType?: string;
  creativeTemplateId?: number | string;
  componentType?: string;
  fields?: unknown;
}


export class V3ComponentDependsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ComponentDependsApiGetRequest): Promise<ComponentDependsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ComponentDependsApiGetRequest): Promise<ApiResponse<ComponentDependsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.marketingGoal == null) {
      throw new ApiException("Missing the required parameter 'marketingGoal' when calling get");
    }

    if (request.marketingTargetType == null) {
      throw new ApiException("Missing the required parameter 'marketingTargetType' when calling get");
    }

    if (request.marketingCarrierType == null) {
      throw new ApiException("Missing the required parameter 'marketingCarrierType' when calling get");
    }

    if (request.deliveryMode == null) {
      throw new ApiException("Missing the required parameter 'deliveryMode' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ComponentDependsGetResponseData>({
      method: "GET",
      path: "/component_depends/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "marketing_goal", value: request.marketingGoal },
        { name: "marketing_sub_goal", value: request.marketingSubGoal },
        { name: "marketing_target_type", value: request.marketingTargetType },
        { name: "marketing_carrier_type", value: request.marketingCarrierType },
        { name: "automatic_site_enabled", value: request.automaticSiteEnabled },
        { name: "site_set", value: request.siteSet, collectionFormat: "multi" },
        { name: "delivery_mode", value: request.deliveryMode },
        { name: "dynamic_creative_type", value: request.dynamicCreativeType },
        { name: "creative_template_id", value: request.creativeTemplateId },
        { name: "component_type", value: request.componentType },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


