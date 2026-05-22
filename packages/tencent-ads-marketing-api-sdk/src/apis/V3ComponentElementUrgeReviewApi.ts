// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ComponentElementUrgeReviewAddRequest, ComponentElementUrgeReviewAddResponseData, ComponentElementUrgeReviewGetResponseData } from "../models";

export interface V3ComponentElementUrgeReviewApiAddRequest {
  data: ComponentElementUrgeReviewAddRequest;
}

export interface V3ComponentElementUrgeReviewApiGetRequest {
  accountId: number | string;
  dynamicCreativeId: number | string;
  componentIdList?: unknown;
  elementFingerprintList?: unknown;
  fields?: unknown;
}


export class V3ComponentElementUrgeReviewApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3ComponentElementUrgeReviewApiAddRequest): Promise<ComponentElementUrgeReviewAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3ComponentElementUrgeReviewApiAddRequest): Promise<ApiResponse<ComponentElementUrgeReviewAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ComponentElementUrgeReviewAddResponseData>({
      method: "POST",
      path: "/component_element_urge_review/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3ComponentElementUrgeReviewApiGetRequest): Promise<ComponentElementUrgeReviewGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ComponentElementUrgeReviewApiGetRequest): Promise<ApiResponse<ComponentElementUrgeReviewGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dynamicCreativeId == null) {
      throw new ApiException("Missing the required parameter 'dynamicCreativeId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ComponentElementUrgeReviewGetResponseData>({
      method: "GET",
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


