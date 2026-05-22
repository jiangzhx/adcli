// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_programmed_commponent_preview_template.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ProgrammedCommponentPreviewTemplateUpdateRequest, ProgrammedCommponentPreviewTemplateUpdateResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ProgrammedCommponentPreviewTemplateApiUpdateRequest {
  data: ProgrammedCommponentPreviewTemplateUpdateRequest;
}


export class ProgrammedCommponentPreviewTemplateApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: ProgrammedCommponentPreviewTemplateApiUpdateRequest): Promise<ProgrammedCommponentPreviewTemplateUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: ProgrammedCommponentPreviewTemplateApiUpdateRequest): Promise<ApiResponse<ProgrammedCommponentPreviewTemplateUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedCommponentPreviewTemplateUpdateResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/programmed_commponent_preview_template/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


