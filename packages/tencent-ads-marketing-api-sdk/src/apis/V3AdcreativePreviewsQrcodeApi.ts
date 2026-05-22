// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdcreativePreviewsQrcodeGetResponseData } from "../models";

export interface V3AdcreativePreviewsQrcodeApiGetRequest {
  accountId: number | string;
  adgroupId: number | string;
  fields?: unknown;
}


export class V3AdcreativePreviewsQrcodeApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3AdcreativePreviewsQrcodeApiGetRequest): Promise<AdcreativePreviewsQrcodeGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3AdcreativePreviewsQrcodeApiGetRequest): Promise<ApiResponse<AdcreativePreviewsQrcodeGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.adgroupId == null) {
      throw new ApiException("Missing the required parameter 'adgroupId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativePreviewsQrcodeGetResponseData>({
      method: "GET",
      path: "/adcreative_previews_qrcode/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "adgroup_id", value: request.adgroupId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


