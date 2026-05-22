// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedCommponentPreviewAddRequest, ProgrammedCommponentPreviewAddResponseData, ProgrammedCommponentPreviewDeleteRequest, ProgrammedCommponentPreviewDeleteResponseData, ProgrammedCommponentPreviewGetResponseData, ProgrammedCommponentPreviewUpdateRequest, ProgrammedCommponentPreviewUpdateResponseData } from "../models";

export interface V3ProgrammedCommponentPreviewApiAddRequest {
  data: ProgrammedCommponentPreviewAddRequest;
}

export interface V3ProgrammedCommponentPreviewApiDeleteRequest {
  data: ProgrammedCommponentPreviewDeleteRequest;
}

export interface V3ProgrammedCommponentPreviewApiGetRequest {
  accountId: number | string;
  materialDeriveId: number | string;
  fields?: unknown;
}

export interface V3ProgrammedCommponentPreviewApiUpdateRequest {
  data: ProgrammedCommponentPreviewUpdateRequest;
}


export class V3ProgrammedCommponentPreviewApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3ProgrammedCommponentPreviewApiAddRequest): Promise<ProgrammedCommponentPreviewAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3ProgrammedCommponentPreviewApiAddRequest): Promise<ApiResponse<ProgrammedCommponentPreviewAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedCommponentPreviewAddResponseData>({
      method: "POST",
      path: "/programmed_commponent_preview/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: V3ProgrammedCommponentPreviewApiDeleteRequest): Promise<ProgrammedCommponentPreviewDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: V3ProgrammedCommponentPreviewApiDeleteRequest): Promise<ApiResponse<ProgrammedCommponentPreviewDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedCommponentPreviewDeleteResponseData>({
      method: "POST",
      path: "/programmed_commponent_preview/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: V3ProgrammedCommponentPreviewApiGetRequest): Promise<ProgrammedCommponentPreviewGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ProgrammedCommponentPreviewApiGetRequest): Promise<ApiResponse<ProgrammedCommponentPreviewGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.materialDeriveId == null) {
      throw new ApiException("Missing the required parameter 'materialDeriveId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedCommponentPreviewGetResponseData>({
      method: "GET",
      path: "/programmed_commponent_preview/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "material_derive_id", value: request.materialDeriveId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: V3ProgrammedCommponentPreviewApiUpdateRequest): Promise<ProgrammedCommponentPreviewUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3ProgrammedCommponentPreviewApiUpdateRequest): Promise<ApiResponse<ProgrammedCommponentPreviewUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedCommponentPreviewUpdateResponseData>({
      method: "POST",
      path: "/programmed_commponent_preview/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


