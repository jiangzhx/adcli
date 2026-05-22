// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_component_element_urge_review.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ComponentElementUrgeReviewAddRequest, ComponentElementUrgeReviewAddResponseData, ComponentElementUrgeReviewGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ComponentElementUrgeReviewApiAddRequest {
  data: ComponentElementUrgeReviewAddRequest;
}

export interface ComponentElementUrgeReviewApiGetRequest {
  accountId: number | string;
  dynamicCreativeId: number | string;
  componentIdList?: unknown;
  elementFingerprintList?: unknown;
  fields?: unknown;
}


export class ComponentElementUrgeReviewApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ComponentElementUrgeReviewApiAddRequest): Promise<ComponentElementUrgeReviewAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ComponentElementUrgeReviewApiAddRequest): Promise<ApiResponse<ComponentElementUrgeReviewAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ComponentElementUrgeReviewAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/component_element_urge_review/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ComponentElementUrgeReviewApiGetRequest): Promise<ComponentElementUrgeReviewGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ComponentElementUrgeReviewApiGetRequest): Promise<ApiResponse<ComponentElementUrgeReviewGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dynamicCreativeId == null) {
      throw new ApiException("Missing the required parameter 'dynamicCreativeId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ComponentElementUrgeReviewGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/component_element_urge_review/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "dynamic_creative_id", value: request.dynamicCreativeId },
        { name: "component_id_list", value: request.componentIdList, collectionFormat: "multi" },
        { name: "element_fingerprint_list", value: request.elementFingerprintList, collectionFormat: "multi" },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


