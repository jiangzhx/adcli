// Generated from oceanengine/ad_open_sdk_go api/api_tools_app_management_booking_records_get_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsAppManagementBookingRecordsGetV2CreateTime, ToolsAppManagementBookingRecordsGetV2HostType, ToolsAppManagementBookingRecordsGetV2Response } from "../models/index";


export interface ToolsAppManagementBookingRecordsGetV2ApiOpenApi2ToolsAppManagementBookingRecordsGetGetRequest {
  advertiserId: number | string;
  packageId: string;
  hostType: ToolsAppManagementBookingRecordsGetV2HostType;
  page?: number;
  pageSize?: number;
  createTime?: ToolsAppManagementBookingRecordsGetV2CreateTime;
}

export class ToolsAppManagementBookingRecordsGetV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsAppManagementBookingRecordsGetGet(request: ToolsAppManagementBookingRecordsGetV2ApiOpenApi2ToolsAppManagementBookingRecordsGetGetRequest): Promise<ToolsAppManagementBookingRecordsGetV2Response> {
    const response = await this.openApi2ToolsAppManagementBookingRecordsGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsAppManagementBookingRecordsGetGetWithHttpInfo(request: ToolsAppManagementBookingRecordsGetV2ApiOpenApi2ToolsAppManagementBookingRecordsGetGetRequest): Promise<ApiResponse<ToolsAppManagementBookingRecordsGetV2Response>> {
    if (request.advertiserId == null) {
      throw new ApiException("advertiserId is required and must be specified");
    }

    if (request.packageId == null) {
      throw new ApiException("packageId is required and must be specified");
    }

    if (request.hostType == null) {
      throw new ApiException("hostType is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<ToolsAppManagementBookingRecordsGetV2Response>({
      method: "GET",
      path: "/open_api/2/tools/app_management/booking_records/get/",
      queryParams: [
        { name: "advertiser_id", value: request.advertiserId },
        { name: "package_id", value: request.packageId },
        { name: "host_type", value: request.hostType },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "create_time", value: request.createTime }
      ]
    });
  }
}


