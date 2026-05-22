// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SpiTaskGetV2Response, SpiTaskGetV2Status } from "../models";


export class SpiTaskGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2SpiTaskGetGet(appId: number, count: number, cursor: number, endDate: string, page: number, pageSize: number, serviceLabel: string, startDate: string, status: SpiTaskGetV2Status, subscribeId: number): Promise<SpiTaskGetV2Response> {
    const response = await this.openApi2SpiTaskGetGetWithHttpInfo(appId, count, cursor, endDate, page, pageSize, serviceLabel, startDate, status, subscribeId);
    return response.data;
  }

  async openApi2SpiTaskGetGetWithHttpInfo(appId: number, count: number, cursor: number, endDate: string, page: number, pageSize: number, serviceLabel: string, startDate: string, status: SpiTaskGetV2Status, subscribeId: number): Promise<ApiResponse<SpiTaskGetV2Response>> {

    return this.apiClient.requestWithHttpInfo<SpiTaskGetV2Response>({
      method: "GET",
      path: "/open_api/2/spi_task/get/",
      queryParams: [
        { name: "app_id", value: appId },
        { name: "count", value: count },
        { name: "cursor", value: cursor },
        { name: "end_date", value: endDate },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "service_label", value: serviceLabel },
        { name: "start_date", value: startDate },
        { name: "status", value: status },
        { name: "subscribe_id", value: subscribeId }
      ]
    });
  }
}


