// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_material_dcaset.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MaterialDcasetAddRequest, MaterialDcasetAddResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MaterialDcasetApiAddRequest {
  data: MaterialDcasetAddRequest;
}


export class MaterialDcasetApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: MaterialDcasetApiAddRequest): Promise<MaterialDcasetAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: MaterialDcasetApiAddRequest): Promise<ApiResponse<MaterialDcasetAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MaterialDcasetAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/material_dcaset/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


