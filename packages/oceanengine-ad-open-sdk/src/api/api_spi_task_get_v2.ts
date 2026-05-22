// Generated from oceanengine/ad_open_sdk_go api/api_spi_task_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SpiTaskGetV2Response, SpiTaskGetV2Status } from "../models/index";


export interface SpiTaskGetV2ApiOpenApi2SpiTaskGetGetRequest {
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

  async openApi2SpiTaskGetGet(request: SpiTaskGetV2ApiOpenApi2SpiTaskGetGetRequest): Promise<SpiTaskGetV2Response> {
    const response = await this.openApi2SpiTaskGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2SpiTaskGetGetWithHttpInfo(request: SpiTaskGetV2ApiOpenApi2SpiTaskGetGetRequest): Promise<ApiResponse<SpiTaskGetV2Response>> {

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


