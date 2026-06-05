// 由 oceanengine/ad_open_sdk_go api/api_local_project_delete_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalProjectDeleteV30Request, LocalProjectDeleteV30Response } from "../models/index";


export interface LocalProjectDeleteV30ApiOpenApiV30LocalProjectDeletePostRequest {
  localProjectDeleteV30Request?: LocalProjectDeleteV30Request;
}

export class LocalProjectDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalProjectDeletePost(request: LocalProjectDeleteV30ApiOpenApiV30LocalProjectDeletePostRequest): Promise<LocalProjectDeleteV30Response> {
    const response = await this.openApiV30LocalProjectDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalProjectDeletePostWithHttpInfo(request: LocalProjectDeleteV30ApiOpenApiV30LocalProjectDeletePostRequest): Promise<ApiResponse<LocalProjectDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<LocalProjectDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/local/project/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.localProjectDeleteV30Request
    });
  }
}


