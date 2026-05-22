// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { PlayablePagesAddResponseData, PlayablePagesGetResponseData } from "../models";

export interface PlayablePagesApiAddRequest {
  accountId: number | string;
  playablePageName: string;
  materialFile: Blob;
}

export interface PlayablePagesApiGetRequest {
  accountId: number | string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class PlayablePagesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: PlayablePagesApiAddRequest): Promise<PlayablePagesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: PlayablePagesApiAddRequest): Promise<ApiResponse<PlayablePagesAddResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }

    if (request.playablePageName == null) {
      throw new ApiException("Missing the required parameter 'playablePageName' when calling add");
    }

    if (request.materialFile == null) {
      throw new ApiException("Missing the required parameter 'materialFile' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<PlayablePagesAddResponseData>({
      method: "POST",
      path: "/playable_pages/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        playable_page_name: request.playablePageName
      },
      files: {
        material_file: request.materialFile
      }
    });
  }

  async get(request: PlayablePagesApiGetRequest): Promise<PlayablePagesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: PlayablePagesApiGetRequest): Promise<ApiResponse<PlayablePagesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<PlayablePagesGetResponseData>({
      method: "GET",
      path: "/playable_pages/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


