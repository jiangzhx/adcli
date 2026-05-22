// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedAddRequest, ProgrammedAddResponseData, ProgrammedGetRequest, ProgrammedGetResponseData, ProgrammedUpdateRequest, ProgrammedUpdateResponseData } from "../models";

export interface ProgrammedApiAddRequest {
  data: ProgrammedAddRequest;
}

export interface ProgrammedApiGetRequest {
  data: ProgrammedGetRequest;
}

export interface ProgrammedApiUpdateRequest {
  data: ProgrammedUpdateRequest;
}


export class ProgrammedApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ProgrammedApiAddRequest): Promise<ProgrammedAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ProgrammedApiAddRequest): Promise<ApiResponse<ProgrammedAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedAddResponseData>({
      method: "POST",
      path: "/programmed/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ProgrammedApiGetRequest): Promise<ProgrammedGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProgrammedApiGetRequest): Promise<ApiResponse<ProgrammedGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedGetResponseData>({
      method: "POST",
      path: "/programmed/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async update(request: ProgrammedApiUpdateRequest): Promise<ProgrammedUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: ProgrammedApiUpdateRequest): Promise<ApiResponse<ProgrammedUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedUpdateResponseData>({
      method: "POST",
      path: "/programmed/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


