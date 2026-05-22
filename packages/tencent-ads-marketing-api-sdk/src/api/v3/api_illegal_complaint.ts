// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_illegal_complaint.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { IllegalComplaintGetRequest, IllegalComplaintGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface IllegalComplaintApiAddRequest {
  accountId: number | string;
  illegalOrderId: string;
  complaintReason: string;
  file: Blob;
}

export interface IllegalComplaintApiGetRequest {
  data: IllegalComplaintGetRequest;
}


export class IllegalComplaintApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: IllegalComplaintApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: IllegalComplaintApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }

    if (request.illegalOrderId == null) {
      throw new ApiException("Missing the required parameter 'illegalOrderId' when calling add");
    }

    if (request.complaintReason == null) {
      throw new ApiException("Missing the required parameter 'complaintReason' when calling add");
    }

    if (request.file == null) {
      throw new ApiException("Missing the required parameter 'file' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/illegal_complaint/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        illegal_order_id: request.illegalOrderId,
        complaint_reason: request.complaintReason
      },
      files: {
        file: request.file
      }
    });
  }

  async get(request: IllegalComplaintApiGetRequest): Promise<IllegalComplaintGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: IllegalComplaintApiGetRequest): Promise<ApiResponse<IllegalComplaintGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<IllegalComplaintGetResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/illegal_complaint/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


