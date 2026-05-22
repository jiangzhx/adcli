// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_qualification_images.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QualificationImagesAddResponseData, QualificationImagesGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface QualificationImagesApiAddRequest {
  accountId: number | string;
  signature: string;
  file: Blob;
}

export interface QualificationImagesApiGetRequest {
  accountId: number | string;
  imageIds: string[];
  page: number;
  pageSize: number;
  fields?: unknown;
}


export class QualificationImagesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: QualificationImagesApiAddRequest): Promise<QualificationImagesAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: QualificationImagesApiAddRequest): Promise<ApiResponse<QualificationImagesAddResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }

    if (request.signature == null) {
      throw new ApiException("Missing the required parameter 'signature' when calling add");
    }

    if (request.file == null) {
      throw new ApiException("Missing the required parameter 'file' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<QualificationImagesAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/qualification_images/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        signature: request.signature
      },
      files: {
        file: request.file
      }
    });
  }

  async get(request: QualificationImagesApiGetRequest): Promise<QualificationImagesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: QualificationImagesApiGetRequest): Promise<ApiResponse<QualificationImagesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.imageIds == null) {
      throw new ApiException("Missing the required parameter 'imageIds' when calling get");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling get");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<QualificationImagesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/qualification_images/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "image_ids", value: request.imageIds, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


