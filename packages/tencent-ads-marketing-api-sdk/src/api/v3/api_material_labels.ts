// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_material_labels.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MaterialLabelsAddRequest, MaterialLabelsAddResponseData, MaterialLabelsBindRequest, MaterialLabelsBindResponseData, MaterialLabelsDeleteRequest, MaterialLabelsDeleteResponseData, MaterialLabelsGetResponseData, MaterialLabelsUpdateRequest, MaterialLabelsUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MaterialLabelsApiAddRequest {
  data: MaterialLabelsAddRequest;
}

export interface MaterialLabelsApiBindRequest {
  data: MaterialLabelsBindRequest;
}

export interface MaterialLabelsApiDeleteRequest {
  data: MaterialLabelsDeleteRequest;
}

export interface MaterialLabelsApiGetRequest {
  accountId?: number | string;
  organizationId?: number | string;
  labelId?: number | string;
  labelName?: string;
  firstLabelLevelIdList?: unknown;
  secondLabelLevelIdList?: unknown;
  needCount?: boolean;
  businessScenario?: string;
  ownershipType?: string;
  orderBy?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}

export interface MaterialLabelsApiUpdateRequest {
  data: MaterialLabelsUpdateRequest;
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
      basePath: TencentAdsV30Configuration.basePath,
      path: "/material_labels/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async bind(request: MaterialLabelsApiBindRequest): Promise<MaterialLabelsBindResponseData> {
    const response = await this.bindWithHttpInfo(request);
    return response.data;
  }

  async bindWithHttpInfo(request: MaterialLabelsApiBindRequest): Promise<ApiResponse<MaterialLabelsBindResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling bind");
    }
    return this.apiClient.requestWithHttpInfo<MaterialLabelsBindResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/material_labels/bind",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async delete(request: MaterialLabelsApiDeleteRequest): Promise<MaterialLabelsDeleteResponseData> {
    const response = await this.deleteWithHttpInfo(request);
    return response.data;
  }

  async deleteWithHttpInfo(request: MaterialLabelsApiDeleteRequest): Promise<ApiResponse<MaterialLabelsDeleteResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling delete");
    }
    return this.apiClient.requestWithHttpInfo<MaterialLabelsDeleteResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/material_labels/delete",
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

    return this.apiClient.requestWithHttpInfo<MaterialLabelsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/material_labels/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "organization_id", value: request.organizationId },
        { name: "label_id", value: request.labelId },
        { name: "label_name", value: request.labelName },
        { name: "first_label_level_id_list", value: request.firstLabelLevelIdList, collectionFormat: "multi" },
        { name: "second_label_level_id_list", value: request.secondLabelLevelIdList, collectionFormat: "multi" },
        { name: "need_count", value: request.needCount },
        { name: "business_scenario", value: request.businessScenario },
        { name: "ownership_type", value: request.ownershipType },
        { name: "order_by", value: request.orderBy, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

  async update(request: MaterialLabelsApiUpdateRequest): Promise<MaterialLabelsUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: MaterialLabelsApiUpdateRequest): Promise<ApiResponse<MaterialLabelsUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<MaterialLabelsUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/material_labels/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


