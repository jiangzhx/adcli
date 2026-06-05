// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_keyword_create_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsKeywordCreateV30Request, OcProjectToolsKeywordCreateV30Response } from "../models/index";


export interface OcProjectToolsKeywordCreateV30ApiOpenApiV30OcProjectToolsKeywordCreatePostRequest {
  ocProjectToolsKeywordCreateV30Request?: OcProjectToolsKeywordCreateV30Request;
}

export class OcProjectToolsKeywordCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsKeywordCreatePost(request: OcProjectToolsKeywordCreateV30ApiOpenApiV30OcProjectToolsKeywordCreatePostRequest): Promise<OcProjectToolsKeywordCreateV30Response> {
    const response = await this.openApiV30OcProjectToolsKeywordCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsKeywordCreatePostWithHttpInfo(request: OcProjectToolsKeywordCreateV30ApiOpenApiV30OcProjectToolsKeywordCreatePostRequest): Promise<ApiResponse<OcProjectToolsKeywordCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectToolsKeywordCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/tools_keyword/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ocProjectToolsKeywordCreateV30Request
    });
  }
}


