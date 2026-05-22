// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LeadsFormAddRequest, LeadsFormAddResponseData, LeadsFormGetResponseData } from "../models";

export interface LeadsFormApiAddRequest {
  data: LeadsFormAddRequest;
}

export interface LeadsFormApiGetRequest {
  accountId: number | string;
  componentId: string;
  fields?: unknown;
}


export class LeadsFormApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: LeadsFormApiAddRequest): Promise<LeadsFormAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: LeadsFormApiAddRequest): Promise<ApiResponse<LeadsFormAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<LeadsFormAddResponseData>({
      method: "POST",
      path: "/leads_form/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: LeadsFormApiGetRequest): Promise<LeadsFormGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: LeadsFormApiGetRequest): Promise<ApiResponse<LeadsFormGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.componentId == null) {
      throw new ApiException("Missing the required parameter 'componentId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<LeadsFormGetResponseData>({
      method: "GET",
      path: "/leads_form/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "component_id", value: request.componentId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


