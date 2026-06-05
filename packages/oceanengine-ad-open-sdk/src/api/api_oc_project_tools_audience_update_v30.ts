// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_audience_update_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsAudienceUpdateV30Request, OcProjectToolsAudienceUpdateV30Response } from "../models/index";


export interface OcProjectToolsAudienceUpdateV30ApiOpenApiV30OcProjectToolsAudienceUpdatePostRequest {
  ocProjectToolsAudienceUpdateV30Request?: OcProjectToolsAudienceUpdateV30Request;
}

export class OcProjectToolsAudienceUpdateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsAudienceUpdatePost(request: OcProjectToolsAudienceUpdateV30ApiOpenApiV30OcProjectToolsAudienceUpdatePostRequest): Promise<OcProjectToolsAudienceUpdateV30Response> {
    const response = await this.openApiV30OcProjectToolsAudienceUpdatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsAudienceUpdatePostWithHttpInfo(request: OcProjectToolsAudienceUpdateV30ApiOpenApiV30OcProjectToolsAudienceUpdatePostRequest): Promise<ApiResponse<OcProjectToolsAudienceUpdateV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectToolsAudienceUpdateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/tools_audience/update/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ocProjectToolsAudienceUpdateV30Request
    });
  }
}


