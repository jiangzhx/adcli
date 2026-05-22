// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { StarDemandOmGetDemandListV2Response, StarDemandOmGetDemandListV2UniversalSettlementType } from "../models";


export interface OpenApi2StarDemandOmGetDemandListGetRequest {
  starId: number;
  pageNo: number;
  pageSize: number;
  createStartTime: number;
  createEndTime: number;
  universalSettlementType?: StarDemandOmGetDemandListV2UniversalSettlementType;
  microAppId?: string;
}

export class StarDemandOmGetDemandListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmGetDemandListGet(request: OpenApi2StarDemandOmGetDemandListGetRequest): Promise<StarDemandOmGetDemandListV2Response> {
    const response = await this.openApi2StarDemandOmGetDemandListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2StarDemandOmGetDemandListGetWithHttpInfo(request: OpenApi2StarDemandOmGetDemandListGetRequest): Promise<ApiResponse<StarDemandOmGetDemandListV2Response>> {
    if (request.starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandOmGetDemandListGet");
    }

    if (request.pageNo == null) {
      throw new ApiException("Missing the required parameter 'pageNo' when calling openApi2StarDemandOmGetDemandListGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarDemandOmGetDemandListGet");
    }

    if (request.createStartTime == null) {
      throw new ApiException("Missing the required parameter 'createStartTime' when calling openApi2StarDemandOmGetDemandListGet");
    }

    if (request.createEndTime == null) {
      throw new ApiException("Missing the required parameter 'createEndTime' when calling openApi2StarDemandOmGetDemandListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandOmGetDemandListV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/om_get_demand_list/",
      queryParams: [
        { name: "star_id", value: request.starId },
        { name: "universal_settlement_type", value: request.universalSettlementType },
        { name: "page_no", value: request.pageNo },
        { name: "page_size", value: request.pageSize },
        { name: "micro_app_id", value: request.microAppId },
        { name: "create_start_time", value: request.createStartTime },
        { name: "create_end_time", value: request.createEndTime }
      ]
    });
  }
}


