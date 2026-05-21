// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { DpaAlbumStatusGetV30Response } from "../models";


export class DpaAlbumStatusGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaAlbumStatusGetGet(albumId: string, appId: number): Promise<DpaAlbumStatusGetV30Response> {
    const response = await this.openApiV30DpaAlbumStatusGetGetWithHttpInfo(albumId, appId);
    return response.data;
  }

  async openApiV30DpaAlbumStatusGetGetWithHttpInfo(albumId: string, appId: number): Promise<ApiResponse<DpaAlbumStatusGetV30Response>> {
    if (albumId == null) {
      throw new ApiException("Missing the required parameter 'albumId' when calling openApiV30DpaAlbumStatusGetGet");
    }

    if (appId == null) {
      throw new ApiException("Missing the required parameter 'appId' when calling openApiV30DpaAlbumStatusGetGet");
    }
    return this.apiClient.requestWithHttpInfo<DpaAlbumStatusGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/dpa/album_status/get/",
      queryParams: [
        { name: "album_id", value: albumId },
        { name: "app_id", value: appId }
      ]
    });
  }
}


