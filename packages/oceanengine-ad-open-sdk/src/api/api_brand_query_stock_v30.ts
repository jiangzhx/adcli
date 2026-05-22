// Generated from oceanengine/ad_open_sdk_go api/api_brand_query_stock_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { BrandQueryStockV30AdForm, BrandQueryStockV30AppOrigin, BrandQueryStockV30AudienceInfo, BrandQueryStockV30Classify, BrandQueryStockV30GdSendType, BrandQueryStockV30LandingType, BrandQueryStockV30Response, BrandQueryStockV30ScheduleInfo } from "../models/index";


export interface BrandQueryStockV30ApiOpenApiV30BrandQueryStockGetRequest {
  advertiserId: number | string;
  classify: BrandQueryStockV30Classify;
  landingType: BrandQueryStockV30LandingType;
  appOrigin: BrandQueryStockV30AppOrigin;
  adForm: BrandQueryStockV30AdForm;
  gdSendType: BrandQueryStockV30GdSendType;
  policyNo: string;
  scheduleInfo: BrandQueryStockV30ScheduleInfo;
  audienceInfo?: BrandQueryStockV30AudienceInfo;
  merchantIntentionNo?: string;
}

export class BrandQueryStockV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30BrandQueryStockGet(request: BrandQueryStockV30ApiOpenApiV30BrandQueryStockGetRequest): Promise<BrandQueryStockV30Response> {
    const response = await this.openApiV30BrandQueryStockGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30BrandQueryStockGetWithHttpInfo(request: BrandQueryStockV30ApiOpenApiV30BrandQueryStockGetRequest): Promise<ApiResponse<BrandQueryStockV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30BrandQueryStockGet");
    }

    if (request.classify == null) {
      throw new ApiException("Missing the required parameter 'classify' when calling openApiV30BrandQueryStockGet");
    }

    if (request.landingType == null) {
      throw new ApiException("Missing the required parameter 'landingType' when calling openApiV30BrandQueryStockGet");
    }

    if (request.appOrigin == null) {
      throw new ApiException("Missing the required parameter 'appOrigin' when calling openApiV30BrandQueryStockGet");
    }

    if (request.adForm == null) {
      throw new ApiException("Missing the required parameter 'adForm' when calling openApiV30BrandQueryStockGet");
    }

    if (request.gdSendType == null) {
      throw new ApiException("Missing the required parameter 'gdSendType' when calling openApiV30BrandQueryStockGet");
    }

    if (request.policyNo == null) {
      throw new ApiException("Missing the required parameter 'policyNo' when calling openApiV30BrandQueryStockGet");
    }

    if (request.scheduleInfo == null) {
      throw new ApiException("Missing the required parameter 'scheduleInfo' when calling openApiV30BrandQueryStockGet");
    }
    return this.apiClient.requestWithHttpInfo<BrandQueryStockV30Response>({
      method: "GET",
      path: "/open_api/v3.0/brand/query_stock/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "classify", value: request.classify },
        { name: "landing_type", value: request.landingType },
        { name: "app_origin", value: request.appOrigin },
        { name: "ad_form", value: request.adForm },
        { name: "gd_send_type", value: request.gdSendType },
        { name: "audience_info", value: request.audienceInfo },
        { name: "policy_no", value: request.policyNo },
        { name: "schedule_info", value: request.scheduleInfo },
        { name: "merchant_intention_no", value: request.merchantIntentionNo }
      ]
    });
  }
}


