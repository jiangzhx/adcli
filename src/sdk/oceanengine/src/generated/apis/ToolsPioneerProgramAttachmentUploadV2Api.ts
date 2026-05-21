// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../../runtime/ApiClient";
import { ApiException } from "../../runtime/ApiException";
import type { ApiResponse } from "../../runtime/ApiResponse";
import type { ToolsPioneerProgramAttachmentUploadV2DataFileType, ToolsPioneerProgramAttachmentUploadV2Platform, ToolsPioneerProgramAttachmentUploadV2Response } from "../models";


export class ToolsPioneerProgramAttachmentUploadV2Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApi2ToolsPioneerProgramAttachmentUploadPost(appId: number, dataFileType: ToolsPioneerProgramAttachmentUploadV2DataFileType, fileData: File, fileIndex: number, fileTotalNum: number, pDate: string, platform: ToolsPioneerProgramAttachmentUploadV2Platform, debugMode: boolean): Promise<ToolsPioneerProgramAttachmentUploadV2Response> {
    const response = await this.openApi2ToolsPioneerProgramAttachmentUploadPostWithHttpInfo(appId, dataFileType, fileData, fileIndex, fileTotalNum, pDate, platform, debugMode);
    return response.data;
  }

  async openApi2ToolsPioneerProgramAttachmentUploadPostWithHttpInfo(appId: number, dataFileType: ToolsPioneerProgramAttachmentUploadV2DataFileType, fileData: File, fileIndex: number, fileTotalNum: number, pDate: string, platform: ToolsPioneerProgramAttachmentUploadV2Platform, debugMode: boolean): Promise<ApiResponse<ToolsPioneerProgramAttachmentUploadV2Response>> {
    if (appId == null) {
      throw new ApiException("Missing the required parameter 'appId' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }

    if (dataFileType == null) {
      throw new ApiException("Missing the required parameter 'dataFileType' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }

    if (fileData == null) {
      throw new ApiException("Missing the required parameter 'fileData' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }

    if (fileIndex == null) {
      throw new ApiException("Missing the required parameter 'fileIndex' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }

    if (fileTotalNum == null) {
      throw new ApiException("Missing the required parameter 'fileTotalNum' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }

    if (pDate == null) {
      throw new ApiException("Missing the required parameter 'pDate' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }

    if (platform == null) {
      throw new ApiException("Missing the required parameter 'platform' when calling openApi2ToolsPioneerProgramAttachmentUploadPost");
    }
    return this.apiClient.requestWithHttpInfo<ToolsPioneerProgramAttachmentUploadV2Response>({
      method: "POST",
      path: "/open_api/2/tools/pioneer_program/attachment/upload/",
      queryParams: [

      ]
    });
  }
}


