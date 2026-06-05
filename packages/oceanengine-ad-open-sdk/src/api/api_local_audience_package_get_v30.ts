// 由 oceanengine/ad_open_sdk_go api/api_local_audience_package_get_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalAudiencePackageGetV30Response } from "../models/index";


export interface LocalAudiencePackageGetV30ApiOpenApiV30LocalAudiencePackageGetGetRequest {
  localAccountId: number | string;
  page?: number;
  pageSize?: number;
}

export class LocalAudiencePackageGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalAudiencePackageGetGet(request: LocalAudiencePackageGetV30ApiOpenApiV30LocalAudiencePackageGetGetRequest): Promise<LocalAudiencePackageGetV30Response> {
    const response = await this.openApiV30LocalAudiencePackageGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalAudiencePackageGetGetWithHttpInfo(request: LocalAudiencePackageGetV30ApiOpenApiV30LocalAudiencePackageGetGetRequest): Promise<ApiResponse<LocalAudiencePackageGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<LocalAudiencePackageGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/audience_package/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


