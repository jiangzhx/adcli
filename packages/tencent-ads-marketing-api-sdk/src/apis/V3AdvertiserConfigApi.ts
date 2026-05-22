// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserConfigAddRequest, AdvertiserConfigGetResponseData } from "../models";

export interface V3AdvertiserConfigApiAddRequest {
  data: AdvertiserConfigAddRequest;
}

export interface V3AdvertiserConfigApiGetRequest {
  accountId: number | string;
  organizationId?: number | string;
  fields?: unknown;
}


export class V3AdvertiserConfigApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3AdvertiserConfigApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3AdvertiserConfigApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      path: "/advertiser_config/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3AdvertiserConfigApiGetRequest): Promise<AdvertiserConfigGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AdvertiserConfigApiGetRequest): Promise<ApiResponse<AdvertiserConfigGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserConfigGetResponseData>({
      method: "GET",
      path: "/advertiser_config/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "organization_id", value: request.organizationId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


