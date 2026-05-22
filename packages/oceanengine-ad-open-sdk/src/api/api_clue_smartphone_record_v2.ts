// Generated from oceanengine/ad_open_sdk_go api/api_clue_smartphone_record_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ClueSmartphoneRecordV2Response } from "../models/index";


export interface ClueSmartphoneRecordV2ApiOpenApi2ClueSmartphoneRecordGetRequest {
  advertiserId: number | string;
  instanceIds?: (number | string)[];
  clueIds?: (number | string)[];
  siteIds?: (number | string)[];
  adIds?: (number | string)[];
  startTime?: string;
  endTime?: string;
  page?: number;
  pageSize?: number;
}

export class ClueSmartphoneRecordV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ClueSmartphoneRecordGet(request: ClueSmartphoneRecordV2ApiOpenApi2ClueSmartphoneRecordGetRequest): Promise<ClueSmartphoneRecordV2Response> {
    const response = await this.openApi2ClueSmartphoneRecordGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ClueSmartphoneRecordGetWithHttpInfo(request: ClueSmartphoneRecordV2ApiOpenApi2ClueSmartphoneRecordGetRequest): Promise<ApiResponse<ClueSmartphoneRecordV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.advertiserId != null && Number(request.advertiserId) < 1) {
      throw new ApiException("advertiserId must be greater than 1");
    }

    if (request.advertiserId != null && Number(request.advertiserId) > -9223372036854775616) {
      throw new ApiException("advertiserId must be less than -9223372036854775616");
    }
    return this.apiClient.requestWithHttpInfo<ClueSmartphoneRecordV2Response>({
      method: "GET",
      path: "/open_api/2/clue/smartphone/record/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "instance_ids", value: request.instanceIds },
        { name: "clue_ids", value: request.clueIds },
        { name: "site_ids", value: request.siteIds },
        { name: "ad_ids", value: request.adIds },
        { name: "start_time", value: request.startTime },
        { name: "end_time", value: request.endTime },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


