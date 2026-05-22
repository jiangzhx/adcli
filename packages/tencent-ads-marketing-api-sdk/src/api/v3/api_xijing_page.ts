// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_xijing_page.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { XijingPageAddRequest, XijingPageAddResponseData, XijingPageDeleteRequest, XijingPageDeleteResponseData, XijingPageUpdateRequest, XijingPageUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface XijingPageApiAddRequest {
  data: XijingPageAddRequest;
}

export interface XijingPageApiDeleteRequest {
  data: XijingPageDeleteRequest;
}

export interface XijingPageApiUpdateRequest {
  data: XijingPageUpdateRequest;
}


export class XijingPageApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: XijingPageApiAddRequest): Promise<XijingPageAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: XijingPageApiAddRequest): Promise<ApiResponse<XijingPageAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<XijingPageAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/xijing_page/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: XijingPageApiDeleteRequest): Promise<XijingPageDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: XijingPageApiDeleteRequest): Promise<ApiResponse<XijingPageDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<XijingPageDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/xijing_page/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: XijingPageApiUpdateRequest): Promise<XijingPageUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: XijingPageApiUpdateRequest): Promise<ApiResponse<XijingPageUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<XijingPageUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/xijing_page/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


