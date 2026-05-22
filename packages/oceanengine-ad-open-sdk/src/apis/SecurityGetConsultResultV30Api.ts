// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SecurityGetConsultResultV30Response } from "../models";


export interface OpenApiV30SecurityGetConsultResultGetRequest {
  advertiserId: number | string;
  appealTrackIds: number | string[];
}

export class SecurityGetConsultResultV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityGetConsultResultGet(request: OpenApiV30SecurityGetConsultResultGetRequest): Promise<SecurityGetConsultResultV30Response> {
    const response = await this.openApiV30SecurityGetConsultResultGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityGetConsultResultGetWithHttpInfo(request: OpenApiV30SecurityGetConsultResultGetRequest): Promise<ApiResponse<SecurityGetConsultResultV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30SecurityGetConsultResultGet");
    }

    if (request.appealTrackIds == null) {
      throw new ApiException("Missing the required parameter 'appealTrackIds' when calling openApiV30SecurityGetConsultResultGet");
    }
    return this.apiClient.requestWithHttpInfo<SecurityGetConsultResultV30Response>({
      method: "GET",
      path: "/open_api/v3.0/security/get_consult_result/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "appeal_track_ids", value: request.appealTrackIds, collectionFormat: "csv" }
      ]
    });
  }
}


