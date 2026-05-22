// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { BrandQueryStockV30AdForm, BrandQueryStockV30AppOrigin, BrandQueryStockV30AudienceInfo, BrandQueryStockV30Classify, BrandQueryStockV30GdSendType, BrandQueryStockV30LandingType, BrandQueryStockV30Response, BrandQueryStockV30ScheduleInfo } from "../models";


export class BrandQueryStockV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandQueryStockGet(advertiserId: number, classify: BrandQueryStockV30Classify, landingType: BrandQueryStockV30LandingType, appOrigin: BrandQueryStockV30AppOrigin, adForm: BrandQueryStockV30AdForm, gdSendType: BrandQueryStockV30GdSendType, policyNo: string, scheduleInfo: BrandQueryStockV30ScheduleInfo, audienceInfo: BrandQueryStockV30AudienceInfo, merchantIntentionNo: string): Promise<BrandQueryStockV30Response> {
    const response = await this.openApiV30BrandQueryStockGetWithHttpInfo(advertiserId, classify, landingType, appOrigin, adForm, gdSendType, policyNo, scheduleInfo, audienceInfo, merchantIntentionNo);
    return response.data;
  }

  async openApiV30BrandQueryStockGetWithHttpInfo(advertiserId: number, classify: BrandQueryStockV30Classify, landingType: BrandQueryStockV30LandingType, appOrigin: BrandQueryStockV30AppOrigin, adForm: BrandQueryStockV30AdForm, gdSendType: BrandQueryStockV30GdSendType, policyNo: string, scheduleInfo: BrandQueryStockV30ScheduleInfo, audienceInfo: BrandQueryStockV30AudienceInfo, merchantIntentionNo: string): Promise<ApiResponse<BrandQueryStockV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandQueryStockGet");
    }

    if (classify == null) {
      throw new ApiException("Missing the required parameter 'classify' when calling openApiV30BrandQueryStockGet");
    }

    if (landingType == null) {
      throw new ApiException("Missing the required parameter 'landingType' when calling openApiV30BrandQueryStockGet");
    }

    if (appOrigin == null) {
      throw new ApiException("Missing the required parameter 'appOrigin' when calling openApiV30BrandQueryStockGet");
    }

    if (adForm == null) {
      throw new ApiException("Missing the required parameter 'adForm' when calling openApiV30BrandQueryStockGet");
    }

    if (gdSendType == null) {
      throw new ApiException("Missing the required parameter 'gdSendType' when calling openApiV30BrandQueryStockGet");
    }

    if (policyNo == null) {
      throw new ApiException("Missing the required parameter 'policyNo' when calling openApiV30BrandQueryStockGet");
    }

    if (scheduleInfo == null) {
      throw new ApiException("Missing the required parameter 'scheduleInfo' when calling openApiV30BrandQueryStockGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandQueryStockV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/query_stock/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "classify", value: classify },
        { name: "landing_type", value: landingType },
        { name: "app_origin", value: appOrigin },
        { name: "ad_form", value: adForm },
        { name: "gd_send_type", value: gdSendType },
        { name: "audience_info", value: audienceInfo },
        { name: "policy_no", value: policyNo },
        { name: "schedule_info", value: scheduleInfo },
        { name: "merchant_intention_no", value: merchantIntentionNo }
      ]
    });
  }
}


