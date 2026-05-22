// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { IllegalComplaintGetRequest, IllegalComplaintGetResponseData } from "../models";

export interface V3IllegalComplaintApiAddRequest {
  accountId: number | string;
  illegalOrderId: string;
  complaintReason: string;
  file: Blob;
}

export interface V3IllegalComplaintApiGetRequest {
  data: IllegalComplaintGetRequest;
}


export class V3IllegalComplaintApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: V3IllegalComplaintApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: V3IllegalComplaintApiAddRequest): Promise<ApiResponse<unknown>> {
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

  async get(request: V3IllegalComplaintApiGetRequest): Promise<IllegalComplaintGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3IllegalComplaintApiGetRequest): Promise<ApiResponse<IllegalComplaintGetResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<IllegalComplaintGetResponseData>({
      method: "POST",
      path: "/illegal_complaint/get",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

}


