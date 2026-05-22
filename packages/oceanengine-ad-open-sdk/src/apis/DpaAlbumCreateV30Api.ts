// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DpaAlbumCreateV30Request, DpaAlbumCreateV30Response } from "../models";


export class DpaAlbumCreateV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30DpaAlbumCreatePost(request: DpaAlbumCreateV30Request): Promise<DpaAlbumCreateV30Response> {
    const response = await this.openApiV30DpaAlbumCreatePostWithHttpInfo(request);
    return response.data;
  }

  async openApiV30DpaAlbumCreatePostWithHttpInfo(request: DpaAlbumCreateV30Request): Promise<ApiResponse<DpaAlbumCreateV30Response>> {
    return this.apiClient.requestWithHttpInfo<DpaAlbumCreateV30Response>({
      method: "POST",
      path: "/open_api/v3.0/dpa/album/create/",
      queryParams: [

      ],
      body: request
    });
  }
}


