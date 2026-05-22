// Generated from oceanengine/ad_open_sdk_go api/api_local_charge_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalChargeListV30ChargeMethods, LocalChargeListV30Response } from "../models/index";


export interface LocalChargeListV30ApiOpenApiV30LocalChargeListGetRequest {
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

  async openApiV30LocalChargeListGet(request: LocalChargeListV30ApiOpenApiV30LocalChargeListGetRequest): Promise<LocalChargeListV30Response> {
    const response = await this.openApiV30LocalChargeListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalChargeListGetWithHttpInfo(request: LocalChargeListV30ApiOpenApiV30LocalChargeListGetRequest): Promise<ApiResponse<LocalChargeListV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("localAccountId is required and must be specified");
    }

    if (request.startTime == null) {
      throw new ApiException("startTime is required and must be specified");
    }

    if (request.endTime == null) {
      throw new ApiException("endTime is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<LocalChargeListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/charge/list/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "charge_methods", value: request.chargeMethods },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


