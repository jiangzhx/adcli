// Generated from tencentad/marketing-api-go-sdk pkg/api/api_xijing_page_interactive.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import { DefaultConfiguration as TencentAdsV13Configuration } from "../config/configuration";

export interface XijingPageInteractiveApiAddRequest {
  accountId: number | string;
  isAutoSubmit: number;
  pageType: string;
  interactivePageType: string;
  pageTitle: string;
  pageName: string;
  mobileAppId: string;
  file?: Blob;
  transformType?: string;
  pageConfig?: string;
}


export class XijingPageInteractiveApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: XijingPageInteractiveApiAddRequest): Promise<unknown> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: XijingPageInteractiveApiAddRequest): Promise<ApiResponse<unknown>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling add");
    }

    if (request.isAutoSubmit == null) {
      throw new ApiException("Missing the required parameter 'isAutoSubmit' when calling add");
    }

    if (request.pageType == null) {
      throw new ApiException("Missing the required parameter 'pageType' when calling add");
    }

    if (request.interactivePageType == null) {
      throw new ApiException("Missing the required parameter 'interactivePageType' when calling add");
    }

    if (request.pageTitle == null) {
      throw new ApiException("Missing the required parameter 'pageTitle' when calling add");
    }

    if (request.pageName == null) {
      throw new ApiException("Missing the required parameter 'pageName' when calling add");
    }

    if (request.mobileAppId == null) {
      throw new ApiException("Missing the required parameter 'mobileAppId' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<unknown>({
      method: "POST",
      basePath: TencentAdsV13Configuration.basePath,
      path: "/xijing_page_interactive/add",
      queryParams: [

      ],
      contentType: "multipart/form-data",
      formParams: {
        account_id: request.accountId,
        is_auto_submit: request.isAutoSubmit,
        page_type: request.pageType,
        interactive_page_type: request.interactivePageType,
        page_title: request.pageTitle,
        page_name: request.pageName,
        mobile_app_id: request.mobileAppId,
        transform_type: request.transformType,
        page_config: request.pageConfig
      },
      files: {
        file: request.file
      }
    });
  }

}


