// Generated from oceanengine/ad_open_sdk_go api/api_advertiser_delivery_qualification_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { AdvertiserDeliveryQualificationListV30QualificationType, AdvertiserDeliveryQualificationListV30Response, AdvertiserDeliveryQualificationListV30Status } from "../models/index";


export interface AdvertiserDeliveryQualificationListV30ApiOpenApiV30AdvertiserDeliveryQualificationListGetRequest {
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

  async openApiV30AdvertiserDeliveryQualificationListGet(request: AdvertiserDeliveryQualificationListV30ApiOpenApiV30AdvertiserDeliveryQualificationListGetRequest): Promise<AdvertiserDeliveryQualificationListV30Response> {
    const response = await this.openApiV30AdvertiserDeliveryQualificationListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30AdvertiserDeliveryQualificationListGetWithHttpInfo(request: AdvertiserDeliveryQualificationListV30ApiOpenApiV30AdvertiserDeliveryQualificationListGetRequest): Promise<ApiResponse<AdvertiserDeliveryQualificationListV30Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.page == null) {
      throw new ApiException("page is required and must be specified");
    }

    if (request.page != null && Number(request.page) < 1) {
      throw new ApiException("page must be greater than 1");
    }

    if (request.page != null && Number(request.page) > 10000) {
      throw new ApiException("page must be less than 10000");
    }

    if (request.pageSize == null) {
      throw new ApiException("pageSize is required and must be specified");
    }

    if (request.pageSize != null && Number(request.pageSize) < 1) {
      throw new ApiException("pageSize must be greater than 1");
    }

    if (request.pageSize != null && Number(request.pageSize) > 100) {
      throw new ApiException("pageSize must be less than 100");
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


