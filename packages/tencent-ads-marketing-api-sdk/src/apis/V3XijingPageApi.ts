// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { XijingPageAddRequest, XijingPageAddResponseData, XijingPageDeleteRequest, XijingPageDeleteResponseData, XijingPageUpdateRequest, XijingPageUpdateResponseData } from "../models";

export interface V3XijingPageApiAddRequest {
  data: XijingPageAddRequest;
}

export interface V3XijingPageApiDeleteRequest {
  data: XijingPageDeleteRequest;
}

export interface V3XijingPageApiUpdateRequest {
  data: XijingPageUpdateRequest;
}


export class V3XijingPageApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3XijingPageApiAddRequest): Promise<XijingPageAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3XijingPageApiAddRequest): Promise<ApiResponse<XijingPageAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<XijingPageAddResponseData>({
      method: "POST",
      path: "/xijing_page/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3XijingPageApiDeleteRequest): Promise<XijingPageDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3XijingPageApiDeleteRequest): Promise<ApiResponse<XijingPageDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<XijingPageDeleteResponseData>({
      method: "POST",
      path: "/xijing_page/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: V3XijingPageApiUpdateRequest): Promise<XijingPageUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3XijingPageApiUpdateRequest): Promise<ApiResponse<XijingPageUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<XijingPageUpdateResponseData>({
      method: "POST",
      path: "/xijing_page/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


