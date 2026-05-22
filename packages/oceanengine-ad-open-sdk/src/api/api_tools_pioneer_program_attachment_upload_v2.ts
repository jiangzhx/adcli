// Generated from oceanengine/ad_open_sdk_go api/api_tools_pioneer_program_attachment_upload_v2.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { ToolsPioneerProgramAttachmentUploadV2DataFileType, ToolsPioneerProgramAttachmentUploadV2Platform, ToolsPioneerProgramAttachmentUploadV2Response } from "../models/index";


export interface ToolsPioneerProgramAttachmentUploadV2ApiOpenApi2ToolsPioneerProgramAttachmentUploadPostRequest {
  appId: number | string;
  dataFileType: ToolsPioneerProgramAttachmentUploadV2DataFileType;
  fileData: Blob;
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

  async openApi2ToolsPioneerProgramAttachmentUploadPost(request: ToolsPioneerProgramAttachmentUploadV2ApiOpenApi2ToolsPioneerProgramAttachmentUploadPostRequest): Promise<ToolsPioneerProgramAttachmentUploadV2Response> {
    const response = await this.openApi2ToolsPioneerProgramAttachmentUploadPostWithHttpInfo(request);
    return response.data;
  }

  async openApi2ToolsPioneerProgramAttachmentUploadPostWithHttpInfo(request: ToolsPioneerProgramAttachmentUploadV2ApiOpenApi2ToolsPioneerProgramAttachmentUploadPostRequest): Promise<ApiResponse<ToolsPioneerProgramAttachmentUploadV2Response>> {
    if (request.appId == null) {
      throw new ApiException("appId is required and must be specified");
    }

    if (request.dataFileType == null) {
      throw new ApiException("dataFileType is required and must be specified");
    }

    if (request.fileData == null) {
      throw new ApiException("fileData is required and must be specified");
    }

    if (request.fileIndex == null) {
      throw new ApiException("fileIndex is required and must be specified");
    }

    if (request.fileTotalNum == null) {
      throw new ApiException("fileTotalNum is required and must be specified");
    }

    if (request.pDate == null) {
      throw new ApiException("pDate is required and must be specified");
    }

    if (request.platform == null) {
      throw new ApiException("platform is required and must be specified");
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


