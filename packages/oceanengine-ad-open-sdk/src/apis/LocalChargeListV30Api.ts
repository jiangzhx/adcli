// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalChargeListV30ChargeMethods, LocalChargeListV30Response } from "../models";


export interface OpenApiV30LocalChargeListGetRequest {
  localAccountId: number | string;
  startTime: string;
  endTime: string;
  chargeMethods?: LocalChargeListV30ChargeMethods[];
  page?: number;
  pageSize?: number;
}

export class LocalChargeListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalChargeListGet(request: OpenApiV30LocalChargeListGetRequest): Promise<LocalChargeListV30Response> {
    const response = await this.openApiV30LocalChargeListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalChargeListGetWithHttpInfo(request: OpenApiV30LocalChargeListGetRequest): Promise<ApiResponse<LocalChargeListV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalChargeListGet");
    }

    if (request.startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30LocalChargeListGet");
    }

    if (request.endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30LocalChargeListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalChargeListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/charge/list/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "charge_methods", value: request.chargeMethods, collectionFormat: "csv" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


