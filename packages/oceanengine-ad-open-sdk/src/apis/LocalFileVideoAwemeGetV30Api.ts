// Generated from oceanengine/ad_open_sdk_go
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalFileVideoAwemeGetV30ExternalAction, LocalFileVideoAwemeGetV30Filtering, LocalFileVideoAwemeGetV30OrderFiled, LocalFileVideoAwemeGetV30Response } from "../models";


export interface OpenApiV30LocalFileVideoAwemeGetGetRequest {
  localAccountId: number | string;
  cursor: string;
  filtering?: LocalFileVideoAwemeGetV30Filtering;
  orderFiled?: LocalFileVideoAwemeGetV30OrderFiled;
  externalAction?: LocalFileVideoAwemeGetV30ExternalAction;
  count?: number;
}

export class LocalFileVideoAwemeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalFileVideoAwemeGetGet(request: OpenApiV30LocalFileVideoAwemeGetGetRequest): Promise<LocalFileVideoAwemeGetV30Response> {
    const response = await this.openApiV30LocalFileVideoAwemeGetGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30LocalFileVideoAwemeGetGetWithHttpInfo(request: OpenApiV30LocalFileVideoAwemeGetGetRequest): Promise<ApiResponse<LocalFileVideoAwemeGetV30Response>> {
    if (request.localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalFileVideoAwemeGetGet");
    }

    if (request.cursor == null) {
      throw new ApiException("Missing the required parameter 'cursor' when calling openApiV30LocalFileVideoAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalFileVideoAwemeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/file/video/aweme/get/",
      queryParams: [
        { name: "local_account_id", value: request.localAccountId },
        { name: "filtering", value: request.filtering },
        { name: "order_filed", value: request.orderFiled },
        { name: "external_action", value: request.externalAction },
        { name: "count", value: request.count },
        { name: "cursor", value: request.cursor }
      ]
    });
  }
}


