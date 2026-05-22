// Generated from tencentad/marketing-api-go-sdk pkg/api/api_material_labels.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MaterialLabelsAddRequest, MaterialLabelsAddResponseData, MaterialLabelsGetRequest, MaterialLabelsGetResponseData } from "../model/index";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface MaterialLabelsApiAddRequest {
  data: MaterialLabelsAddRequest;
}

export interface MaterialLabelsApiGetRequest {
  data: MaterialLabelsGetRequest;
}


export class MaterialLabelsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: MaterialLabelsApiAddRequest): Promise<MaterialLabelsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: MaterialLabelsApiAddRequest): Promise<ApiResponse<MaterialLabelsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MaterialLabelsAddResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/material_labels/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: MaterialLabelsApiGetRequest): Promise<MaterialLabelsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MaterialLabelsApiGetRequest): Promise<ApiResponse<MaterialLabelsGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<MaterialLabelsGetResponseData>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/material_labels/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


