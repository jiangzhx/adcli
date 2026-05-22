// Generated from oceanengine/ad_open_sdk_go api/api_ebp_advertiser_task_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EbpAdvertiserTaskListV2Response } from "../models/index";


export interface EbpAdvertiserTaskListV2ApiOpenApi2EbpAdvertiserTaskListGetRequest {
  enterpriseOrganizationId: number | string;
  taskIds: (number | string)[];
}

export class EbpAdvertiserTaskListV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EbpAdvertiserTaskListGet(request: EbpAdvertiserTaskListV2ApiOpenApi2EbpAdvertiserTaskListGetRequest): Promise<EbpAdvertiserTaskListV2Response> {
    const response = await this.openApi2EbpAdvertiserTaskListGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EbpAdvertiserTaskListGetWithHttpInfo(request: EbpAdvertiserTaskListV2ApiOpenApi2EbpAdvertiserTaskListGetRequest): Promise<ApiResponse<EbpAdvertiserTaskListV2Response>> {
    if (request.enterpriseOrganizationId == null) {
      throw new ApiException("enterpriseOrganizationId is required and must be specified");
    }

    if (request.taskIds == null) {
      throw new ApiException("taskIds is required and must be specified");
    }

    if (request.taskIds != null && request.taskIds.length < 1) {
      throw new ApiException("taskIds must have at least 1 elements");
    }

    if (request.taskIds != null && request.taskIds.length > 10) {
      throw new ApiException("taskIds must have less than 10 elements");
    }
    return this.apiClient.requestWithHttpInfo<EbpAdvertiserTaskListV2Response>({
      method: "GET",
      path: "/open_api/2/ebp/advertiser/task/list/",
      queryParams: [
        { name: "enterprise_organization_id", value: request.enterpriseOrganizationId },
        { name: "task_ids", value: request.taskIds }
      ]
    });
  }
}


