// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalDeliveryQualificationListV30QualificationType, LocalDeliveryQualificationListV30Response, LocalDeliveryQualificationListV30Status } from "../models";


export interface OpenApiV30LocalDeliveryQualificationListGetRequest {
  localAccountId: number;
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

  async openApiV30LocalDeliveryQualificationListGet(request: OpenApiV30LocalDeliveryQualificationListGetRequest): Promise<LocalDeliveryQualificationListV30Response> {
    const response = await this.openApiV30LocalDeliveryQualificationListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalDeliveryQualificationListGetWithHttpInfo(request: OpenApiV30LocalDeliveryQualificationListGetRequest): Promise<ApiResponse<LocalDeliveryQualificationListV30Response>> {
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


