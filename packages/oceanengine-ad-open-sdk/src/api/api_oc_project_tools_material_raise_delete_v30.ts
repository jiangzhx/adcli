// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_material_raise_delete_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsMaterialRaiseDeleteV30Request, OcProjectToolsMaterialRaiseDeleteV30Response } from "../models/index";


export interface OcProjectToolsMaterialRaiseDeleteV30ApiOpenApiV30OcProjectToolsMaterialRaiseDeletePostRequest {
  ocProjectToolsMaterialRaiseDeleteV30Request?: OcProjectToolsMaterialRaiseDeleteV30Request;
}

export class OcProjectToolsMaterialRaiseDeleteV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsMaterialRaiseDeletePost(request: OcProjectToolsMaterialRaiseDeleteV30ApiOpenApiV30OcProjectToolsMaterialRaiseDeletePostRequest): Promise<OcProjectToolsMaterialRaiseDeleteV30Response> {
    const response = await this.openApiV30OcProjectToolsMaterialRaiseDeletePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsMaterialRaiseDeletePostWithHttpInfo(request: OcProjectToolsMaterialRaiseDeleteV30ApiOpenApiV30OcProjectToolsMaterialRaiseDeletePostRequest): Promise<ApiResponse<OcProjectToolsMaterialRaiseDeleteV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectToolsMaterialRaiseDeleteV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/tools_material_raise/delete/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ocProjectToolsMaterialRaiseDeleteV30Request
    });
  }
}


