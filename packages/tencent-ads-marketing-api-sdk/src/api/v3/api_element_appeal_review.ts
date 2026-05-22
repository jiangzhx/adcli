// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_element_appeal_review.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ElementAppealReviewAddRequest, ElementAppealReviewGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ElementAppealReviewApiAddRequest {
  data: ElementAppealReviewAddRequest;
}

export interface ElementAppealReviewApiGetRequest {
  accountId: number | string;
  dynamicCreativeId: number | string;
  componentId: number | string;
  elementId: number | string;
  elementFingerPrint: string;
  fields?: unknown;
}


export class ElementAppealReviewApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ElementAppealReviewApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ElementAppealReviewApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/element_appeal_review/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ElementAppealReviewApiGetRequest): Promise<ElementAppealReviewGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ElementAppealReviewApiGetRequest): Promise<ApiResponse<ElementAppealReviewGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dynamicCreativeId == null) {
      throw new ApiException("Missing the required parameter 'dynamicCreativeId' when calling get");
    }

    if (request.componentId == null) {
      throw new ApiException("Missing the required parameter 'componentId' when calling get");
    }

    if (request.elementId == null) {
      throw new ApiException("Missing the required parameter 'elementId' when calling get");
    }

    if (request.elementFingerPrint == null) {
      throw new ApiException("Missing the required parameter 'elementFingerPrint' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ElementAppealReviewGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/element_appeal_review/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "dynamic_creative_id", value: request.dynamicCreativeId },
        { name: "component_id", value: request.componentId },
        { name: "element_id", value: request.elementId },
        { name: "element_finger_print", value: request.elementFingerPrint },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


