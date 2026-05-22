// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { EbpAdvertiserTaskListV2Response } from "../models";


export class EbpAdvertiserTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EbpAdvertiserTaskListGet(enterpriseOrganizationId: number, taskIds: number[]): Promise<EbpAdvertiserTaskListV2Response> {
    const response = await this.openApi2EbpAdvertiserTaskListGetWithHttpInfo(enterpriseOrganizationId, taskIds);
    return response.data;
  }

  async openApi2EbpAdvertiserTaskListGetWithHttpInfo(enterpriseOrganizationId: number, taskIds: number[]): Promise<ApiResponse<EbpAdvertiserTaskListV2Response>> {
    if (enterpriseOrganizationId == null) {
      throw new ApiException("Missing the required parameter 'enterpriseOrganizationId' when calling openApi2EbpAdvertiserTaskListGet");
    }

    if (taskIds == null) {
      throw new ApiException("Missing the required parameter 'taskIds' when calling openApi2EbpAdvertiserTaskListGet");
    }
    return this.apiClient.requestWithHttpInfo<EbpAdvertiserTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/ebp/advertiser/task/list/",
      queryParams: [
        { name: "enterprise_organization_id", value: enterpriseOrganizationId },
        { name: "task_ids", value: taskIds, collectionFormat: "csv" }
      ]
    });
  }
}


