// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { FilePlayableListV30Filtering, FilePlayableListV30MaterialType, FilePlayableListV30Response } from "../models";


export interface OpenApiV30FilePlayableListGetRequest {
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

  async openApiV30FilePlayableListGet(request: OpenApiV30FilePlayableListGetRequest): Promise<FilePlayableListV30Response> {
    const response = await this.openApiV30FilePlayableListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30FilePlayableListGetWithHttpInfo(request: OpenApiV30FilePlayableListGetRequest): Promise<ApiResponse<FilePlayableListV30Response>> {
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


