// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_audience_create_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsAudienceCreateV30Request, OcProjectToolsAudienceCreateV30Response } from "../models/index";


export interface OcProjectToolsAudienceCreateV30ApiOpenApiV30OcProjectToolsAudienceCreatePostRequest {
  ocProjectToolsAudienceCreateV30Request?: OcProjectToolsAudienceCreateV30Request;
}

export class OcProjectToolsAudienceCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsAudienceCreatePost(request: OcProjectToolsAudienceCreateV30ApiOpenApiV30OcProjectToolsAudienceCreatePostRequest): Promise<OcProjectToolsAudienceCreateV30Response> {
    const response = await this.openApiV30OcProjectToolsAudienceCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsAudienceCreatePostWithHttpInfo(request: OcProjectToolsAudienceCreateV30ApiOpenApiV30OcProjectToolsAudienceCreatePostRequest): Promise<ApiResponse<OcProjectToolsAudienceCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectToolsAudienceCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/tools_audience/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ocProjectToolsAudienceCreateV30Request
    });
  }
}


