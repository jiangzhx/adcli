// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_xijing_page_list.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { XijingPageListGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface XijingPageListApiGetRequest {
  accountId: number | string;
  pageId?: number | string;
  pageServiceId?: string;
  pageName?: string;
  pageType?: unknown;
  pageLastModifyStartTime?: string;
  pageLastModifyEndTime?: string;
  pageSize?: number;
  pageIndex?: number;
  pagePublishStatus?: unknown;
  pageStatus?: unknown;
  pageSource?: string;
  pageOwnerId?: number | string;
  appId?: number | string;
  appType?: string;
  queryType?: string;
  fields?: unknown;
}


export class XijingPageListApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: XijingPageListApiGetRequest): Promise<XijingPageListGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: XijingPageListApiGetRequest): Promise<ApiResponse<XijingPageListGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<XijingPageListGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/xijing_page_list/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "page_id", value: request.pageId },
        { name: "page_service_id", value: request.pageServiceId },
        { name: "page_name", value: request.pageName },
        { name: "page_type", value: request.pageType, collectionFormat: "multi" },
        { name: "page_last_modify_start_time", value: request.pageLastModifyStartTime },
        { name: "page_last_modify_end_time", value: request.pageLastModifyEndTime },
        { name: "page_size", value: request.pageSize },
        { name: "page_index", value: request.pageIndex },
        { name: "page_publish_status", value: request.pagePublishStatus, collectionFormat: "multi" },
        { name: "page_status", value: request.pageStatus, collectionFormat: "multi" },
        { name: "page_source", value: request.pageSource },
        { name: "page_owner_id", value: request.pageOwnerId },
        { name: "app_id", value: request.appId },
        { name: "app_type", value: request.appType },
        { name: "query_type", value: request.queryType },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


