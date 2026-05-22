// Generated from oceanengine/ad_open_sdk_go api/api_file_playable_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { FilePlayableListV30Filtering, FilePlayableListV30MaterialType, FilePlayableListV30Response } from "../models/index";


export interface FilePlayableListV30ApiOpenApiV30FilePlayableListGetRequest {
  advertiserId: number | string;
  materialType: FilePlayableListV30MaterialType;
  filtering?: FilePlayableListV30Filtering;
  pageSize?: number;
  page?: number;
}

export class FilePlayableListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30FilePlayableListGet(request: FilePlayableListV30ApiOpenApiV30FilePlayableListGetRequest): Promise<FilePlayableListV30Response> {
    const response = await this.openApiV30FilePlayableListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FilePlayableListGetWithHttpInfo(request: FilePlayableListV30ApiOpenApiV30FilePlayableListGetRequest): Promise<ApiResponse<FilePlayableListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30FilePlayableListGet");
    }

    if (request.materialType == null) {
      throw new ApiException("Missing the required parameter 'materialType' when calling openApiV30FilePlayableListGet");
    }
    return this.apiClient.requestWithHttpInfo<FilePlayableListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/file/playable/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "material_type", value: request.materialType },
        { name: "filtering", value: request.filtering },
        { name: "page_size", value: request.pageSize },
        { name: "page", value: request.page }
      ]
    });
  }
}


