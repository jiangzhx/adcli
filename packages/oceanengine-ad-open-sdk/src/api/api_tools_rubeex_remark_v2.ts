// Generated from oceanengine/ad_open_sdk_go api/api_tools_rubeex_remark_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsRubeexRemarkV2Filtering, ToolsRubeexRemarkV2Response, ToolsRubeexRemarkV2Scene } from "../models/index";


export interface ToolsRubeexRemarkV2ApiOpenApi2ToolsRubeexRemarkGetRequest {
  advertiserId: number;
  projectId: number;
  scene: ToolsRubeexRemarkV2Scene;
  filtering?: ToolsRubeexRemarkV2Filtering;
}

export class ToolsRubeexRemarkV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsRubeexRemarkGet(request: ToolsRubeexRemarkV2ApiOpenApi2ToolsRubeexRemarkGetRequest): Promise<ToolsRubeexRemarkV2Response> {
    const response = await this.openApi2ToolsRubeexRemarkGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsRubeexRemarkGetWithHttpInfo(request: ToolsRubeexRemarkV2ApiOpenApi2ToolsRubeexRemarkGetRequest): Promise<ApiResponse<ToolsRubeexRemarkV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1.0) {
      throw new ApiException("advertiserId must be greater than 1.0");
    }

    if (request.advertiserId != null && Number(request.advertiserId) > 9.223372036854776e+18) {
      throw new ApiException("advertiserId must be less than 9.223372036854776E+18");
    }

    if (request.projectId == null) {
      throw new ApiException("projectId is required and must be specified");
    }

    if (request.projectId != null && Number(request.projectId) < 1.0) {
      throw new ApiException("projectId must be greater than 1.0");
    }

    if (request.projectId != null && Number(request.projectId) > 2147483647) {
      throw new ApiException("projectId must be less than 2147483647");
    }

    if (request.scene == null) {
      throw new ApiException("scene is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsRubeexRemarkV2Response>({
      method: "GET",
      path: "/open_api/2/tools/rubeex/remark/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "project_id", value: request.projectId },
        { name: "scene", value: request.scene },
        { name: "filtering", value: request.filtering }
      ]
    });
  }
}


