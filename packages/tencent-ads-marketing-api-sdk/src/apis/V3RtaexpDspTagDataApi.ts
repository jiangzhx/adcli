// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { RtaexpDspTagDataGetRequest, RtaexpDspTagDataGetResponseData } from "../models";

export interface V3RtaexpDspTagDataApiGetRequest {
  data: RtaexpDspTagDataGetRequest;
}


export class V3RtaexpDspTagDataApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3RtaexpDspTagDataApiGetRequest): Promise<RtaexpDspTagDataGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3RtaexpDspTagDataApiGetRequest): Promise<ApiResponse<RtaexpDspTagDataGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<RtaexpDspTagDataGetResponseData>({
      method: "POST",
      path: "/rtaexp_dsp_tag_data/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


