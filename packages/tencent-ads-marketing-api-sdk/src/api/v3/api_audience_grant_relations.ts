// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_audience_grant_relations.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AudienceGrantRelationsAddRequest, AudienceGrantRelationsGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AudienceGrantRelationsApiAddRequest {
  data: AudienceGrantRelationsAddRequest;
}

export interface AudienceGrantRelationsApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class AudienceGrantRelationsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: AudienceGrantRelationsApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: AudienceGrantRelationsApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/audience_grant_relations/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: AudienceGrantRelationsApiGetRequest): Promise<AudienceGrantRelationsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AudienceGrantRelationsApiGetRequest): Promise<ApiResponse<AudienceGrantRelationsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AudienceGrantRelationsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/audience_grant_relations/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


