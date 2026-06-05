// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_keyword_update_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsKeywordUpdateV30Request, OcProjectToolsKeywordUpdateV30Response } from "../models/index";


export interface OcProjectToolsKeywordUpdateV30ApiOpenApiV30OcProjectToolsKeywordUpdatePostRequest {
  ocProjectToolsKeywordUpdateV30Request?: OcProjectToolsKeywordUpdateV30Request;
}

export class OcProjectToolsKeywordUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsKeywordUpdatePost(request: OcProjectToolsKeywordUpdateV30ApiOpenApiV30OcProjectToolsKeywordUpdatePostRequest): Promise<OcProjectToolsKeywordUpdateV30Response> {
    const response = await this.openApiV30OcProjectToolsKeywordUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsKeywordUpdatePostWithHttpInfo(request: OcProjectToolsKeywordUpdateV30ApiOpenApiV30OcProjectToolsKeywordUpdatePostRequest): Promise<ApiResponse<OcProjectToolsKeywordUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectToolsKeywordUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/tools_keyword/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ocProjectToolsKeywordUpdateV30Request
    });
  }
}


