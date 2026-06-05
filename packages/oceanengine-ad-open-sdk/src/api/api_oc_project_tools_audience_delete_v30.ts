// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_audience_delete_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsAudienceDeleteV30Request, OcProjectToolsAudienceDeleteV30Response } from "../models/index";


export interface OcProjectToolsAudienceDeleteV30ApiOpenApiV30OcProjectToolsAudienceDeletePostRequest {
  ocProjectToolsAudienceDeleteV30Request?: OcProjectToolsAudienceDeleteV30Request;
}

export class OcProjectToolsAudienceDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsAudienceDeletePost(request: OcProjectToolsAudienceDeleteV30ApiOpenApiV30OcProjectToolsAudienceDeletePostRequest): Promise<OcProjectToolsAudienceDeleteV30Response> {
    const response = await this.openApiV30OcProjectToolsAudienceDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsAudienceDeletePostWithHttpInfo(request: OcProjectToolsAudienceDeleteV30ApiOpenApiV30OcProjectToolsAudienceDeletePostRequest): Promise<ApiResponse<OcProjectToolsAudienceDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectToolsAudienceDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/tools_audience/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ocProjectToolsAudienceDeleteV30Request
    });
  }
}


