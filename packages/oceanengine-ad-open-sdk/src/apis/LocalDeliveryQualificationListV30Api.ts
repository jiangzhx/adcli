// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalDeliveryQualificationListV30QualificationType, LocalDeliveryQualificationListV30Response, LocalDeliveryQualificationListV30Status } from "../models";


export class LocalDeliveryQualificationListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalDeliveryQualificationListGet(localAccountId: number, page: number, pageSize: number, qualificationType: LocalDeliveryQualificationListV30QualificationType, status: LocalDeliveryQualificationListV30Status): Promise<LocalDeliveryQualificationListV30Response> {
    const response = await this.openApiV30LocalDeliveryQualificationListGetWithHttpInfo(localAccountId, page, pageSize, qualificationType, status);
    return response.data;
  }

  async openApiV30LocalDeliveryQualificationListGetWithHttpInfo(localAccountId: number, page: number, pageSize: number, qualificationType: LocalDeliveryQualificationListV30QualificationType, status: LocalDeliveryQualificationListV30Status): Promise<ApiResponse<LocalDeliveryQualificationListV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalDeliveryQualificationListGet");
    }

    if (page == null) {
      throw new ApiException("Missing the required parameter 'page' when calling openApiV30LocalDeliveryQualificationListGet");
    }

    if (pageSize == null) {
      throw new ApiException("Missing the required parameter 'pageSize' when calling openApiV30LocalDeliveryQualificationListGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalDeliveryQualificationListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/delivery_qualification/list/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "qualification_type", value: qualificationType },
        { name: "status", value: status },
        { name: "page", value: page },
        { name: "page_size", value: pageSize }
      ]
    });
  }
}


