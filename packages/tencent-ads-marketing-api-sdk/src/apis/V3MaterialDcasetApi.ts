// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MaterialDcasetAddRequest, MaterialDcasetAddResponseData } from "../models";

export interface V3MaterialDcasetApiAddRequest {
  data: MaterialDcasetAddRequest;
}


export class V3MaterialDcasetApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3MaterialDcasetApiAddRequest): Promise<MaterialDcasetAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3MaterialDcasetApiAddRequest): Promise<ApiResponse<MaterialDcasetAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MaterialDcasetAddResponseData>({
      method: "POST",
      path: "/material_dcaset/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


