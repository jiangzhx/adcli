// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FilePlayableListV30Filtering, FilePlayableListV30MaterialType, FilePlayableListV30Response } from "../models";


export class FilePlayableListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FilePlayableListGet(advertiserId: number, materialType: FilePlayableListV30MaterialType, filtering: FilePlayableListV30Filtering, pageSize: number, page: number): Promise<FilePlayableListV30Response> {
    const response = await this.openApiV30FilePlayableListGetWithHttpInfo(advertiserId, materialType, filtering, pageSize, page);
    return response.data;
  }

  async openApiV30FilePlayableListGetWithHttpInfo(advertiserId: number, materialType: FilePlayableListV30MaterialType, filtering: FilePlayableListV30Filtering, pageSize: number, page: number): Promise<ApiResponse<FilePlayableListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30FilePlayableListGet");
    }

    if (materialType == null) {
      throw new ApiException("Missing the required parameter 'materialType' when calling openApiV30FilePlayableListGet");
    }
    return this.apiClient.requestWithHttpInfo<FilePlayableListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/file/playable/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "material_type", value: materialType },
        { name: "filtering", value: filtering },
        { name: "page_size", value: pageSize },
        { name: "page", value: page }
      ]
    });
  }
}


