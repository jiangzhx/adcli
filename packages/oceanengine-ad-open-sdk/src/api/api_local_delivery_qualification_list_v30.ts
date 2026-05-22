// Generated from oceanengine/ad_open_sdk_go api/api_local_delivery_qualification_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { LocalDeliveryQualificationListV30QualificationType, LocalDeliveryQualificationListV30Response, LocalDeliveryQualificationListV30Status } from "../models/index";


export interface LocalDeliveryQualificationListV30ApiOpenApiV30LocalDeliveryQualificationListGetRequest {
  localAccountId: number | string;
  page: number;
  pageSize: number;
  qualificationType?: LocalDeliveryQualificationListV30QualificationType;
  status?: LocalDeliveryQualificationListV30Status;
}

export class LocalDeliveryQualificationListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalDeliveryQualificationListGet(request: LocalDeliveryQualificationListV30ApiOpenApiV30LocalDeliveryQualificationListGetRequest): Promise<LocalDeliveryQualificationListV30Response> {
    const response = await this.openApiV30LocalDeliveryQualificationListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalDeliveryQualificationListGetWithHttpInfo(request: LocalDeliveryQualificationListV30ApiOpenApiV30LocalDeliveryQualificationListGetRequest): Promise<ApiResponse<LocalDeliveryQualificationListV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalDeliveryQualificationListGet");
    }

    if (request.page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30LocalDeliveryQualificationListGet");
    }

    if (request.pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30LocalDeliveryQualificationListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalDeliveryQualificationListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/delivery_qualification/list/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "qualification_type", value: request.qualificationType },
        { name: "status", value: request.status },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize }
      ]
    });
  }
}


