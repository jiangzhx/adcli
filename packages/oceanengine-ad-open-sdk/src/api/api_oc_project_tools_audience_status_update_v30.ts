// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_audience_status_update_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsAudienceStatusUpdateV30Request, OcProjectToolsAudienceStatusUpdateV30Response } from "../models/index";


export interface OcProjectToolsAudienceStatusUpdateV30ApiOpenApiV30OcProjectToolsAudienceStatusUpdatePostRequest {
  ocProjectToolsAudienceStatusUpdateV30Request?: OcProjectToolsAudienceStatusUpdateV30Request;
}

export class OcProjectToolsAudienceStatusUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsAudienceStatusUpdatePost(request: OcProjectToolsAudienceStatusUpdateV30ApiOpenApiV30OcProjectToolsAudienceStatusUpdatePostRequest): Promise<OcProjectToolsAudienceStatusUpdateV30Response> {
    const response = await this.openApiV30OcProjectToolsAudienceStatusUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsAudienceStatusUpdatePostWithHttpInfo(request: OcProjectToolsAudienceStatusUpdateV30ApiOpenApiV30OcProjectToolsAudienceStatusUpdatePostRequest): Promise<ApiResponse<OcProjectToolsAudienceStatusUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectToolsAudienceStatusUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/tools_audience/status/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ocProjectToolsAudienceStatusUpdateV30Request
    });
  }
}


