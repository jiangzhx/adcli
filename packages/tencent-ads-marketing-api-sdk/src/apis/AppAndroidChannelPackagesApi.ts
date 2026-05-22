// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AppAndroidChannelPackagesGetResponseData } from "../models";

export interface AppAndroidChannelPackagesApiGetRequest {
  accountId: number | string;
  promotedObjectId: string;
  promotedObjectType: string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class AppAndroidChannelPackagesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AppAndroidChannelPackagesApiGetRequest): Promise<AppAndroidChannelPackagesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AppAndroidChannelPackagesApiGetRequest): Promise<ApiResponse<AppAndroidChannelPackagesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.promotedObjectId == null) {
      throw new ApiException("Missing the required parameter 'promotedObjectId' when calling get");
    }

    if (request.promotedObjectType == null) {
      throw new ApiException("Missing the required parameter 'promotedObjectType' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AppAndroidChannelPackagesGetResponseData>({
      method: "GET",
      path: "/app_android_channel_packages/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "promoted_object_id", value: request.promotedObjectId },
        { name: "promoted_object_type", value: request.promotedObjectType },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


