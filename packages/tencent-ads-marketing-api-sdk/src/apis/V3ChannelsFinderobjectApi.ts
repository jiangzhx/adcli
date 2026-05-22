// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ChannelsFinderobjectGetResponseData } from "../models";

export interface V3ChannelsFinderobjectApiGetRequest {
  accountId: number | string;
  exportId: string;
  fields?: unknown;
}


export class V3ChannelsFinderobjectApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3ChannelsFinderobjectApiGetRequest): Promise<ChannelsFinderobjectGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3ChannelsFinderobjectApiGetRequest): Promise<ApiResponse<ChannelsFinderobjectGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.exportId == null) {
      throw new ApiException("Missing the required parameter 'exportId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<ChannelsFinderobjectGetResponseData>({
      method: "GET",
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


