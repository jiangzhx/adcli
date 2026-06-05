// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_keyword_delete_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsKeywordDeleteV30Request, OcProjectToolsKeywordDeleteV30Response } from "../models/index";


export interface OcProjectToolsKeywordDeleteV30ApiOpenApiV30OcProjectToolsKeywordDeletePostRequest {
  ocProjectToolsKeywordDeleteV30Request?: OcProjectToolsKeywordDeleteV30Request;
}

export class OcProjectToolsKeywordDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsKeywordDeletePost(request: OcProjectToolsKeywordDeleteV30ApiOpenApiV30OcProjectToolsKeywordDeletePostRequest): Promise<OcProjectToolsKeywordDeleteV30Response> {
    const response = await this.openApiV30OcProjectToolsKeywordDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsKeywordDeletePostWithHttpInfo(request: OcProjectToolsKeywordDeleteV30ApiOpenApiV30OcProjectToolsKeywordDeletePostRequest): Promise<ApiResponse<OcProjectToolsKeywordDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectToolsKeywordDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/tools_keyword/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ocProjectToolsKeywordDeleteV30Request
    });
  }
}


