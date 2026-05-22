// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_channels_finderobject.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ChannelsFinderobjectGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface ChannelsFinderobjectApiGetRequest {
  accountId: number | string;
  exportId: string;
  fields?: unknown;
}


export class ChannelsFinderobjectApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: ChannelsFinderobjectApiGetRequest): Promise<ChannelsFinderobjectGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: ChannelsFinderobjectApiGetRequest): Promise<ApiResponse<ChannelsFinderobjectGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.exportId == null) {
      throw new ApiException("Missing the required parameter 'exportId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ChannelsFinderobjectGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/channels_finderobject/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "export_id", value: request.exportId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


