// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { StarDemandOmGetDemandListV2Response, StarDemandOmGetDemandListV2UniversalSettlementType } from "../models";


export class StarDemandOmGetDemandListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2StarDemandOmGetDemandListGet(starId: number, pageNo: number, pageSize: number, createStartTime: number, createEndTime: number, universalSettlementType: StarDemandOmGetDemandListV2UniversalSettlementType, microAppId: string): Promise<StarDemandOmGetDemandListV2Response> {
    const response = await this.openApi2StarDemandOmGetDemandListGetWithHttpInfo(starId, pageNo, pageSize, createStartTime, createEndTime, universalSettlementType, microAppId);
    return response.data;
  }

  async openApi2StarDemandOmGetDemandListGetWithHttpInfo(starId: number, pageNo: number, pageSize: number, createStartTime: number, createEndTime: number, universalSettlementType: StarDemandOmGetDemandListV2UniversalSettlementType, microAppId: string): Promise<ApiResponse<StarDemandOmGetDemandListV2Response>> {
    if (starId == null) {
      throw new ApiException("Missing the required parameter 'starId' when calling openApi2StarDemandOmGetDemandListGet");
    }

    if (pageNo == null) {
      throw new ApiException("Missing the required parameter 'pageNo' when calling openApi2StarDemandOmGetDemandListGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApi2StarDemandOmGetDemandListGet");
    }

    if (createStartTime == null) {
      throw new ApiException("Missing the required parameter 'createStartTime' when calling openApi2StarDemandOmGetDemandListGet");
    }

    if (createEndTime == null) {
      throw new ApiException("Missing the required parameter 'createEndTime' when calling openApi2StarDemandOmGetDemandListGet");
    }
    return this.apiClient.requestWithHttpInfo<StarDemandOmGetDemandListV2Response>({
      method: "GET",
      path: "/open_api/2/star/demand/om_get_demand_list/",
      queryParams: [
        { name: "star_id", value: starId },
        { name: "universal_settlement_type", value: universalSettlementType },
        { name: "page_no", value: pageNo },
        { name: "page_size", value: pageSize },
        { name: "micro_app_id", value: microAppId },
        { name: "create_start_time", value: createStartTime },
        { name: "create_end_time", value: createEndTime }
      ]
    });
  }
}


