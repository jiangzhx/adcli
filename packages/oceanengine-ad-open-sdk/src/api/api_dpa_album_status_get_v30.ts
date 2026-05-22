// Generated from oceanengine/ad_open_sdk_go api/api_dpa_album_status_get_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DpaAlbumStatusGetV30Response } from "../models/index";


export interface DpaAlbumStatusGetV30ApiOpenApiV30DpaAlbumStatusGetGetRequest {
  albumId: string;
  appId: number | string;
}

export class DpaAlbumStatusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaAlbumStatusGetGet(request: DpaAlbumStatusGetV30ApiOpenApiV30DpaAlbumStatusGetGetRequest): Promise<DpaAlbumStatusGetV30Response> {
    const response = await this.openApiV30DpaAlbumStatusGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaAlbumStatusGetGetWithHttpInfo(request: DpaAlbumStatusGetV30ApiOpenApiV30DpaAlbumStatusGetGetRequest): Promise<ApiResponse<DpaAlbumStatusGetV30Response>> {
    if (request.albumId == null) {
      throw new ApiException("albumId is required and must be specified");
    }

    if (request.appId == null) {
      throw new ApiException("appId is required and must be specified");
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


