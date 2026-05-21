// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { SecurityGetConsultResultV30Response } from "../models";


export class SecurityGetConsultResultV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityGetConsultResultGet(advertiserId: number, appealTrackIds: number[]): Promise<SecurityGetConsultResultV30Response> {
    const response = await this.openApiV30SecurityGetConsultResultGetWithHttpInfo(advertiserId, appealTrackIds);
    return response.data;
  }

  async openApiV30SecurityGetConsultResultGetWithHttpInfo(advertiserId: number, appealTrackIds: number[]): Promise<ApiResponse<SecurityGetConsultResultV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30SecurityGetConsultResultGet");
    }

    if (appealTrackIds == null) {
      throw new ApiException("Missing the required parameter 'appealTrackIds' when calling openApiV30SecurityGetConsultResultGet");
    }
    return this.apiClient.requestWithHttpInfo<SecurityGetConsultResultV30Response>({
      method: "GET",
      path: "/open_api/v3.0/security/get_consult_result/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "appeal_track_ids", value: appealTrackIds, collectionFormat: "csv" }
      ]
    });
  }
}


