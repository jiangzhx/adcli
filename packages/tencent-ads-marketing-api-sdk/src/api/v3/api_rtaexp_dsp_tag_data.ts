// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_rtaexp_dsp_tag_data.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { RtaexpDspTagDataGetRequest, RtaexpDspTagDataGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface RtaexpDspTagDataApiGetRequest {
  data: RtaexpDspTagDataGetRequest;
}


export class RtaexpDspTagDataApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: RtaexpDspTagDataApiGetRequest): Promise<RtaexpDspTagDataGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: RtaexpDspTagDataApiGetRequest): Promise<ApiResponse<RtaexpDspTagDataGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<RtaexpDspTagDataGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/rtaexp_dsp_tag_data/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


