// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PropertyFileSessionsAddRequest, PropertyFileSessionsAddResponseData, PropertyFileSessionsUpdateRequest, PropertyFileSessionsUpdateResponseData } from "../models";

export interface PropertyFileSessionsApiAddRequest {
  data: PropertyFileSessionsAddRequest;
}

export interface PropertyFileSessionsApiUpdateRequest {
  data: PropertyFileSessionsUpdateRequest;
}


export class PropertyFileSessionsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: PropertyFileSessionsApiAddRequest): Promise<PropertyFileSessionsAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: PropertyFileSessionsApiAddRequest): Promise<ApiResponse<PropertyFileSessionsAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<PropertyFileSessionsAddResponseData>({
      method: "POST",
      path: "/property_file_sessions/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: PropertyFileSessionsApiUpdateRequest): Promise<PropertyFileSessionsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: PropertyFileSessionsApiUpdateRequest): Promise<ApiResponse<PropertyFileSessionsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<PropertyFileSessionsUpdateResponseData>({
      method: "POST",
      path: "/property_file_sessions/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


