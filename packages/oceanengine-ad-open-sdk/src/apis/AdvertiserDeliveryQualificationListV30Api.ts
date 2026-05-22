// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { AdvertiserDeliveryQualificationListV30QualificationType, AdvertiserDeliveryQualificationListV30Response, AdvertiserDeliveryQualificationListV30Status } from "../models";


export interface OpenApiV30AdvertiserDeliveryQualificationListGetRequest {
  advertiserId: number | string;
  page: number;
  pageSize: number;
  qualificationType?: AdvertiserDeliveryQualificationListV30QualificationType;
  status?: AdvertiserDeliveryQualificationListV30Status;
}

export class AdvertiserDeliveryQualificationListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30AdvertiserDeliveryQualificationListGet(request: OpenApiV30AdvertiserDeliveryQualificationListGetRequest): Promise<AdvertiserDeliveryQualificationListV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryQualificationListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryQualificationListGetWithHttpInfo(request: OpenApiV30AdvertiserDeliveryQualificationListGetRequest): Promise<ApiResponse<AdvertiserDeliveryQualificationListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("Missing the required parameter 'advertiserId' when calling openApiV30AdvertiserDeliveryQualificationListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30AdvertiserDeliveryQualificationListGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30AdvertiserDeliveryQualificationListGet");
    }
    return this.apiClient.requestWithHttpInfo<AdvertiserDeliveryQualificationListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/advertiser/delivery_qualification/list/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "qualification_type", value: request.qualificationType },
        { name: "status", value: request.status },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


