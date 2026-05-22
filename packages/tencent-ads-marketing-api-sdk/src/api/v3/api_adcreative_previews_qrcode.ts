// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_adcreative_previews_qrcode.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdcreativePreviewsQrcodeGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface AdcreativePreviewsQrcodeApiGetRequest {
  accountId: number | string;
  adgroupId: number | string;
  fields?: unknown;
}


export class AdcreativePreviewsQrcodeApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: AdcreativePreviewsQrcodeApiGetRequest): Promise<AdcreativePreviewsQrcodeGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: AdcreativePreviewsQrcodeApiGetRequest): Promise<ApiResponse<AdcreativePreviewsQrcodeGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.adgroupId == null) {
      throw new ApiException("Missing the required parameter 'adgroupId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<AdcreativePreviewsQrcodeGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


