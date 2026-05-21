// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { AdvertiserDeliveryQualificationListV30QualificationType, AdvertiserDeliveryQualificationListV30Response, AdvertiserDeliveryQualificationListV30Status } from "../models";


export class AdvertiserDeliveryQualificationListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserDeliveryQualificationListGet(advertiserId: number, page: number, pageSize: number, qualificationType: AdvertiserDeliveryQualificationListV30QualificationType, status: AdvertiserDeliveryQualificationListV30Status): Promise<AdvertiserDeliveryQualificationListV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryQualificationListGetWithHttpInfo(advertiserId, page, pageSize, qualificationType, status);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryQualificationListGetWithHttpInfo(advertiserId: number, page: number, pageSize: number, qualificationType: AdvertiserDeliveryQualificationListV30QualificationType, status: AdvertiserDeliveryQualificationListV30Status): Promise<ApiResponse<AdvertiserDeliveryQualificationListV30Response>> {
    if (advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AdvertiserDeliveryQualificationListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30AdvertiserDeliveryQualificationListGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30AdvertiserDeliveryQualificationListGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserDeliveryQualificationListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/advertiser/delivery_qualification/list/",
      queryParams: [
        { name: "advertiser_id", value: advertiserId },
        { name: "qualification_type", value: qualificationType },
        { name: "status", value: status },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


