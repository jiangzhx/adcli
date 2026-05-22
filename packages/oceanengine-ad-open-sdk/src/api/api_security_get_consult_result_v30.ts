// Generated from oceanengine/ad_open_sdk_go api/api_security_get_consult_result_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SecurityGetConsultResultV30Response } from "../models/index";


export interface SecurityGetConsultResultV30ApiOpenApiV30SecurityGetConsultResultGetRequest {
  advertiserId: number | string;
  appealTrackIds: (number | string)[];
}

export class SecurityGetConsultResultV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SecurityGetConsultResultGet(request: SecurityGetConsultResultV30ApiOpenApiV30SecurityGetConsultResultGetRequest): Promise<SecurityGetConsultResultV30Response> {
    const response = await this.openApiV30SecurityGetConsultResultGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SecurityGetConsultResultGetWithHttpInfo(request: SecurityGetConsultResultV30ApiOpenApiV30SecurityGetConsultResultGetRequest): Promise<ApiResponse<SecurityGetConsultResultV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.appealTrackIds == null) {
      throw new ApiException("appealTrackIds is required and must be specified");
    }

    if (request.appealTrackIds != null && request.appealTrackIds.length < 1) {
      throw new ApiException("appealTrackIds must have at least 1 elements");
    }

    if (request.appealTrackIds != null && request.appealTrackIds.length > 100) {
      throw new ApiException("appealTrackIds must have less than 100 elements");
    }
    return this.apiClient.requestWithHttpInfo<SecurityGetConsultResultV30Response>({
      method: "GET",
      path: "/open_api/v3.0/security/get_consult_result/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "appeal_track_ids", value: request.appealTrackIds }
      ]
    });
  }
}


