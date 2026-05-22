// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalFileVideoGetV30Filtering, LocalFileVideoGetV30OrderField, LocalFileVideoGetV30OrderType, LocalFileVideoGetV30Response } from "../models";


export interface OpenApiV30LocalFileVideoGetGetRequest {
  localAccountId: number;
  filtering?: LocalFileVideoGetV30Filtering;
  orderField?: LocalFileVideoGetV30OrderField;
  orderType?: LocalFileVideoGetV30OrderType;
  page?: number;
  pageSize?: number;
}

export class LocalFileVideoGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalFileVideoGetGet(request: OpenApiV30LocalFileVideoGetGetRequest): Promise<LocalFileVideoGetV30Response> {
    const response = await this.openApiV30LocalFileVideoGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalFileVideoGetGetWithHttpInfo(request: OpenApiV30LocalFileVideoGetGetRequest): Promise<ApiResponse<LocalFileVideoGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalFileVideoGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalFileVideoGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/file/video/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "filtering", value: request.filtering },
        { name: "order_field", value: request.orderField },
        { name: "order_type", value: request.orderType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


