// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { OnlinePreviewQrcodeGetResponseData } from "../models";

export interface V3OnlinePreviewQrcodeApiGetRequest {
  accountId: number | string;
  dynamicCreativeId: number | string;
  userIdType?: string;
  previewCreativeComponents?: unknown;
  fields?: unknown;
}


export class V3OnlinePreviewQrcodeApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3OnlinePreviewQrcodeApiGetRequest): Promise<OnlinePreviewQrcodeGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3OnlinePreviewQrcodeApiGetRequest): Promise<ApiResponse<OnlinePreviewQrcodeGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.dynamicCreativeId == null) {
      throw new ApiException("Missing the required parameter 'dynamicCreativeId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<OnlinePreviewQrcodeGetResponseData>({
      method: "GET",
      path: "/online_preview_qrcode/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "user_id_type", value: request.userIdType },
        { name: "dynamic_creative_id", value: request.dynamicCreativeId },
        { name: "preview_creative_components", value: request.previewCreativeComponents },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


