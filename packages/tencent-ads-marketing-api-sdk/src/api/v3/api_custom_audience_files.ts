// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_custom_audience_files.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CustomAudienceFilesAddResponseData, CustomAudienceFilesGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface CustomAudienceFilesApiAddRequest {
  accountId: number | string;
  audienceId: number | string;
  userIdType: string;
  file: Blob;
  operationType?: string;
  openAppId?: string;
}

export interface CustomAudienceFilesApiGetRequest {
  accountId: number | string;
  audienceId?: number | string;
  customAudienceFileId?: number | string;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class CustomAudienceFilesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: CustomAudienceFilesApiAddRequest): Promise<CustomAudienceFilesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: CustomAudienceFilesApiAddRequest): Promise<ApiResponse<CustomAudienceFilesAddResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }

    if (request.audienceId == null) {
      throw new ApiException("Missing the required parameter 'audienceId' when calling add");
    }

    if (request.userIdType == null) {
      throw new ApiException("Missing the required parameter 'userIdType' when calling add");
    }

    if (request.file == null) {
      throw new ApiException("Missing the required parameter 'file' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<CustomAudienceFilesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/custom_audience_files/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        audience_id: request.audienceId,
        user_id_type: request.userIdType,
        operation_type: request.operationType,
        open_app_id: request.openAppId
      },
      files: {
        file: request.file
      }
    });
  }

  async get(request: CustomAudienceFilesApiGetRequest): Promise<CustomAudienceFilesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CustomAudienceFilesApiGetRequest): Promise<ApiResponse<CustomAudienceFilesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CustomAudienceFilesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/custom_audience_files/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "audience_id", value: request.audienceId },
        { name: "custom_audience_file_id", value: request.customAudienceFileId },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


