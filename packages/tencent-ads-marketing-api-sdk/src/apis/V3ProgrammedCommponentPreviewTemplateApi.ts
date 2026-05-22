// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ProgrammedCommponentPreviewTemplateUpdateRequest, ProgrammedCommponentPreviewTemplateUpdateResponseData } from "../models";

export interface V3ProgrammedCommponentPreviewTemplateApiUpdateRequest {
  data: ProgrammedCommponentPreviewTemplateUpdateRequest;
}


export class V3ProgrammedCommponentPreviewTemplateApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async update(request: V3ProgrammedCommponentPreviewTemplateApiUpdateRequest): Promise<ProgrammedCommponentPreviewTemplateUpdateResponseData> {
    const response = await this.updateWithHttpInfo(request);
    return response.data;
  }

  async updateWithHttpInfo(request: V3ProgrammedCommponentPreviewTemplateApiUpdateRequest): Promise<ApiResponse<ProgrammedCommponentPreviewTemplateUpdateResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling update");
    }
    return this.apiClient.requestWithHttpInfo<ProgrammedCommponentPreviewTemplateUpdateResponseData>({
      method: "POST",
      path: "/programmed_commponent_preview_template/update",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


