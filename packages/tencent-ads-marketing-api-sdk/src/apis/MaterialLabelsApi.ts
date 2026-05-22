// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MaterialLabelsAddRequest, MaterialLabelsAddResponseData, MaterialLabelsGetRequest, MaterialLabelsGetResponseData } from "../models";

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
      path: "/material_labels/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


