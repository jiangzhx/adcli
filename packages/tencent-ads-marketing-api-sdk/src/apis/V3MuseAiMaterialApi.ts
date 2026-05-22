// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MuseAiMaterialAddRequest, MuseAiMaterialAddResponseData } from "../models";

export interface V3MuseAiMaterialApiAddRequest {
  data: MuseAiMaterialAddRequest;
}


export class V3MuseAiMaterialApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3MuseAiMaterialApiAddRequest): Promise<MuseAiMaterialAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3MuseAiMaterialApiAddRequest): Promise<ApiResponse<MuseAiMaterialAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MuseAiMaterialAddResponseData>({
      method: "POST",
      path: "/muse_ai_material/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


