// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaAlbumStatusGetV30Response } from "../models";


export interface OpenApiV30DpaAlbumStatusGetGetRequest {
  albumId: string;
  appId: number;
}

export class DpaAlbumStatusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaAlbumStatusGetGet(request: OpenApiV30DpaAlbumStatusGetGetRequest): Promise<DpaAlbumStatusGetV30Response> {
    const response = await this.openApiV30DpaAlbumStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaAlbumStatusGetGetWithHttpInfo(request: OpenApiV30DpaAlbumStatusGetGetRequest): Promise<ApiResponse<DpaAlbumStatusGetV30Response>> {
    if (request.albumId == null) {
      throw new ApiException("Missing the required parameter 'albumId' when calling openApiV30DpaAlbumStatusGetGet");
    }

    if (request.appId == null) {
      throw new ApiException("Missing the required parameter 'appId' when calling openApiV30DpaAlbumStatusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaAlbumStatusGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/album_status/get/",
      queryParams: [
        { name: "album_id", value: request.albumId },
        { name: "app_id", value: request.appId }
      ]
    });
  }
}


