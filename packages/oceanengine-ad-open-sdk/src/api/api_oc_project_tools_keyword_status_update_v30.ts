// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_keyword_status_update_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsKeywordStatusUpdateV30Request, OcProjectToolsKeywordStatusUpdateV30Response } from "../models/index";


export interface OcProjectToolsKeywordStatusUpdateV30ApiOpenApiV30OcProjectToolsKeywordStatusUpdatePostRequest {
  ocProjectToolsKeywordStatusUpdateV30Request?: OcProjectToolsKeywordStatusUpdateV30Request;
}

export class OcProjectToolsKeywordStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsKeywordStatusUpdatePost(request: OcProjectToolsKeywordStatusUpdateV30ApiOpenApiV30OcProjectToolsKeywordStatusUpdatePostRequest): Promise<OcProjectToolsKeywordStatusUpdateV30Response> {
    const response = await this.openApiV30OcProjectToolsKeywordStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsKeywordStatusUpdatePostWithHttpInfo(request: OcProjectToolsKeywordStatusUpdateV30ApiOpenApiV30OcProjectToolsKeywordStatusUpdatePostRequest): Promise<ApiResponse<OcProjectToolsKeywordStatusUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectToolsKeywordStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/tools_keyword/status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ocProjectToolsKeywordStatusUpdateV30Request
    });
  }
}


