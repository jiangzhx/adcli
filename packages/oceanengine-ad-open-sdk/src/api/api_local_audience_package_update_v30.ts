// 由 oceanengine/ad_open_sdk_go api/api_local_audience_package_update_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalAudiencePackageUpdateV30Request, LocalAudiencePackageUpdateV30Response } from "../models/index";


export interface LocalAudiencePackageUpdateV30ApiOpenApiV30LocalAudiencePackageUpdatePostRequest {
  localAudiencePackageUpdateV30Request?: LocalAudiencePackageUpdateV30Request;
}

export class LocalAudiencePackageUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalAudiencePackageUpdatePost(request: LocalAudiencePackageUpdateV30ApiOpenApiV30LocalAudiencePackageUpdatePostRequest): Promise<LocalAudiencePackageUpdateV30Response> {
    const response = await this.openApiV30LocalAudiencePackageUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalAudiencePackageUpdatePostWithHttpInfo(request: LocalAudiencePackageUpdateV30ApiOpenApiV30LocalAudiencePackageUpdatePostRequest): Promise<ApiResponse<LocalAudiencePackageUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalAudiencePackageUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/audience_package/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localAudiencePackageUpdateV30Request
    });
  }
}


