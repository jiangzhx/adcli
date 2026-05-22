// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { ToolsPioneerProgramAttachmentUploadV2DataFileType, ToolsPioneerProgramAttachmentUploadV2Platform, ToolsPioneerProgramAttachmentUploadV2Response } from "../models";


export interface OpenApi2ToolsPioneerProgramAttachmentUploadPostRequest {
  appId: number | string;
  dataFileType: ToolsPioneerProgramAttachmentUploadV2DataFileType;
  fileData: File;
  fileIndex: number;
  fileTotalNum: number;
  pDate: string;
  platform: ToolsPioneerProgramAttachmentUploadV2Platform;
  debugMode?: boolean;
}

export class ToolsPioneerProgramAttachmentUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPioneerProgramAttachmentUploadPost(request: OpenApi2ToolsPioneerProgramAttachmentUploadPostRequest): Promise<ToolsPioneerProgramAttachmentUploadV2Response> {
    const response = await this.openApi2ToolsPioneerProgramAttachmentUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPioneerProgramAttachmentUploadPostWithHttpInfo(request: OpenApi2ToolsPioneerProgramAttachmentUploadPostRequest): Promise<ApiResponse<ToolsPioneerProgramAttachmentUploadV2Response>> {
    if (request.appId == null) {
      throw new ApiException("Missing the required parameter 'appId' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }

    if (request.dataFileType == null) {
      throw new ApiException("Missing the required parameter 'dataFileType' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }

    if (request.fileData == null) {
      throw new ApiException("Missing the required parameter 'fileData' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }

    if (request.fileIndex == null) {
      throw new ApiException("Missing the required parameter 'fileIndex' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }

    if (request.fileTotalNum == null) {
      throw new ApiException("Missing the required parameter 'fileTotalNum' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }

    if (request.pDate == null) {
      throw new ApiException("Missing the required parameter 'pDate' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }

    if (request.platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPioneerProgramAttachmentUploadV2Response>({
      method: "POST",
      path: "/open_api/2/tools/pioneer_program/attachment/upload/",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        app_id: request.appId,
        data_file_type: request.dataFileType,
        debug_mode: request.debugMode,
        file_index: request.fileIndex,
        file_total_num: request.fileTotalNum,
        p_date: request.pDate,
        platform: request.platform
      },
      files: {
        file_data: request.fileData
      }
    });
  }
}


