// Generated from oceanengine/ad_open_sdk_go api/api_ebp_advertiser_task_download_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";


export interface EbpAdvertiserTaskDownloadV2ApiOpenApi2EbpAdvertiserTaskDownloadGetRequest {
  enterpriseOrganizationId: number | string;
  taskId?: number | string;
}

export class EbpAdvertiserTaskDownloadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2EbpAdvertiserTaskDownloadGet(request: EbpAdvertiserTaskDownloadV2ApiOpenApi2EbpAdvertiserTaskDownloadGetRequest): Promise<ArrayBuffer> {
    const response = await this.openApi2EbpAdvertiserTaskDownloadGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2EbpAdvertiserTaskDownloadGetWithHttpInfo(request: EbpAdvertiserTaskDownloadV2ApiOpenApi2EbpAdvertiserTaskDownloadGetRequest): Promise<ApiResponse<ArrayBuffer>> {
    if (request.enterpriseOrganizationId == null) {
      throw new ApiException("Missing the required parameter 'enterpriseOrganizationId' when calling openApi2EbpAdvertiserTaskDownloadGet");
    }
    return this.apiClient.requestWithHttpInfo<ArrayBuffer>({
      method: "GET",
      path: "/open_api/2/ebp/advertiser/task/download/",
      queryParams: [
        { name: "enterprise_organization_id", value: request.enterpriseOrganizationId },
        { name: "task_id", value: request.taskId }
      ],
      responseType: "arrayBuffer"
    });
  }
}


