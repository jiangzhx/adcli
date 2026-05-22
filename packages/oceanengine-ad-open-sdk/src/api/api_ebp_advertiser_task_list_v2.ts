// Generated from oceanengine/ad_open_sdk_go api/api_ebp_advertiser_task_list_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { EbpAdvertiserTaskListV2Response } from "../models/index";


export interface EbpAdvertiserTaskListV2ApiOpenApi2EbpAdvertiserTaskListGetRequest {
  enterpriseOrganizationId: number | string;
  taskIds: number | string[];
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
      throw new ApiException("Missing the required parameter 'enterpriseOrganizationId' when calling openApi2EbpAdvertiserTaskListGet");
    }

    if (request.taskIds == null) {
      throw new ApiException("Missing the required parameter 'taskIds' when calling openApi2EbpAdvertiserTaskListGet");
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


