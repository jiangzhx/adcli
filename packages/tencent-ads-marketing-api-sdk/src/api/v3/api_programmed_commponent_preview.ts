// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_programmed_commponent_preview.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProgrammedCommponentPreviewAddRequest, ProgrammedCommponentPreviewAddResponseData, ProgrammedCommponentPreviewDeleteRequest, ProgrammedCommponentPreviewDeleteResponseData, ProgrammedCommponentPreviewGetResponseData, ProgrammedCommponentPreviewUpdateRequest, ProgrammedCommponentPreviewUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ProgrammedCommponentPreviewApiAddRequest {
  data: ProgrammedCommponentPreviewAddRequest;
}

export interface ProgrammedCommponentPreviewApiDeleteRequest {
  data: ProgrammedCommponentPreviewDeleteRequest;
}

export interface ProgrammedCommponentPreviewApiGetRequest {
  accountId: number | string;
  materialDeriveId: number | string;
  fields?: unknown;
}

export interface ProgrammedCommponentPreviewApiUpdateRequest {
  data: ProgrammedCommponentPreviewUpdateRequest;
}


export class ProgrammedCommponentPreviewApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: ProgrammedCommponentPreviewApiAddRequest): Promise<ProgrammedCommponentPreviewAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: ProgrammedCommponentPreviewApiAddRequest): Promise<ApiResponse<ProgrammedCommponentPreviewAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedCommponentPreviewAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/programmed_commponent_preview/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: ProgrammedCommponentPreviewApiDeleteRequest): Promise<ProgrammedCommponentPreviewDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: ProgrammedCommponentPreviewApiDeleteRequest): Promise<ApiResponse<ProgrammedCommponentPreviewDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedCommponentPreviewDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/programmed_commponent_preview/delete",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: ProgrammedCommponentPreviewApiGetRequest): Promise<ProgrammedCommponentPreviewGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ProgrammedCommponentPreviewApiGetRequest): Promise<ApiResponse<ProgrammedCommponentPreviewGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.materialDeriveId == null) {
      throw new ApiException("Missing the required parameter 'materialDeriveId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedCommponentPreviewGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/programmed_commponent_preview/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "material_derive_id", value: request.materialDeriveId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: ProgrammedCommponentPreviewApiUpdateRequest): Promise<ProgrammedCommponentPreviewUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: ProgrammedCommponentPreviewApiUpdateRequest): Promise<ApiResponse<ProgrammedCommponentPreviewUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedCommponentPreviewUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/programmed_commponent_preview/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


