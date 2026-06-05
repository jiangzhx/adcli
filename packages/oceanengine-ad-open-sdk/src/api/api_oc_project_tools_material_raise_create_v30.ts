// 由 oceanengine/ad_open_sdk_go api/api_oc_project_tools_material_raise_create_v30.go 生成
// 不要手动编辑。

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { OcProjectToolsMaterialRaiseCreateV30Request, OcProjectToolsMaterialRaiseCreateV30Response } from "../models/index";


export interface OcProjectToolsMaterialRaiseCreateV30ApiOpenApiV30OcProjectToolsMaterialRaiseCreatePostRequest {
  ocProjectToolsMaterialRaiseCreateV30Request?: OcProjectToolsMaterialRaiseCreateV30Request;
}

export class OcProjectToolsMaterialRaiseCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30OcProjectToolsMaterialRaiseCreatePost(request: OcProjectToolsMaterialRaiseCreateV30ApiOpenApiV30OcProjectToolsMaterialRaiseCreatePostRequest): Promise<OcProjectToolsMaterialRaiseCreateV30Response> {
    const response = await this.openApiV30OcProjectToolsMaterialRaiseCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30OcProjectToolsMaterialRaiseCreatePostWithHttpInfo(request: OcProjectToolsMaterialRaiseCreateV30ApiOpenApiV30OcProjectToolsMaterialRaiseCreatePostRequest): Promise<ApiResponse<OcProjectToolsMaterialRaiseCreateV30Response>> {

    return this.apiClient.requestWithHttpInfo<OcProjectToolsMaterialRaiseCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/oc_project/tools_material_raise/create/",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.ocProjectToolsMaterialRaiseCreateV30Request
    });
  }
}


