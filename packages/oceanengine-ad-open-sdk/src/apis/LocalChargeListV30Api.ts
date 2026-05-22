// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalChargeListV30ChargeMethods, LocalChargeListV30Response } from "../models";


export class LocalChargeListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalChargeListGet(localAccountId: number, startTime: string, endTime: string, chargeMethods: LocalChargeListV30ChargeMethods[], page: number, pageSize: number): Promise<LocalChargeListV30Response> {
    const response = await this.openApiV30LocalChargeListGetWithHttpInfo(localAccountId, startTime, endTime, chargeMethods, page, pageSize);
    return response.data;
  }

  async openApiV30LocalChargeListGetWithHttpInfo(localAccountId: number, startTime: string, endTime: string, chargeMethods: LocalChargeListV30ChargeMethods[], page: number, pageSize: number): Promise<ApiResponse<LocalChargeListV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalChargeListGet");
    }

    if (startTime == null) {
      throw new ApiException("Missing the required parameter 'startTime' when calling openApiV30LocalChargeListGet");
    }

    if (endTime == null) {
      throw new ApiException("Missing the required parameter 'endTime' when calling openApiV30LocalChargeListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalChargeListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/charge/list/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "start_time", value: startTime },
        { name: "end_time", value: endTime },
        { name: "page", value: page },
        { name: "page_size", value: pageSize },
        { name: "charge_methods", value: chargeMethods, collectionFormat: "csv" }
      ]
    });
  }
}


