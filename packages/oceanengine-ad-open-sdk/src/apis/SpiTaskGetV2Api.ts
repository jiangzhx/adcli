// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SpiTaskGetV2Response, SpiTaskGetV2Status } from "../models";


export interface OpenApi2SpiTaskGetGetRequest {
  appId?: number | string;
  count?: number;
  cursor?: number;
  endDate?: string;
  page?: number;
  pageSize?: number;
  serviceLabel?: string;
  startDate?: string;
  status?: SpiTaskGetV2Status;
  subscribeId?: number | string;
}

export class SpiTaskGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2SpiTaskGetGet(request: OpenApi2SpiTaskGetGetRequest): Promise<SpiTaskGetV2Response> {
    const response = await this.openApi2SpiTaskGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2SpiTaskGetGetWithHttpInfo(request: OpenApi2SpiTaskGetGetRequest): Promise<ApiResponse<SpiTaskGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<SpiTaskGetV2Response>({
      method: "GET",
      path: "/open_api/2/spi_task/get/",
      queryParams: [
        { name: "app_id", value: request.appId },
        { name: "count", value: request.count },
        { name: "cursor", value: request.cursor },
        { name: "end_date", value: request.endDate },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "service_label", value: request.serviceLabel },
        { name: "start_date", value: request.startDate },
        { name: "status", value: request.status },
        { name: "subscribe_id", value: request.subscribeId }
      ]
    });
  }
}


