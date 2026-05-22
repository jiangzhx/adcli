// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { LocalFileVideoAwemeGetV30ExternalAction, LocalFileVideoAwemeGetV30Filtering, LocalFileVideoAwemeGetV30OrderFiled, LocalFileVideoAwemeGetV30Response } from "../models";


export class LocalFileVideoAwemeGetV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30LocalFileVideoAwemeGetGet(localAccountId: number, cursor: string, filtering: LocalFileVideoAwemeGetV30Filtering, orderFiled: LocalFileVideoAwemeGetV30OrderFiled, externalAction: LocalFileVideoAwemeGetV30ExternalAction, count: number): Promise<LocalFileVideoAwemeGetV30Response> {
    const response = await this.openApiV30LocalFileVideoAwemeGetGetWithHttpInfo(localAccountId, cursor, filtering, orderFiled, externalAction, count);
    return response.data;
  }

  async openApiV30LocalFileVideoAwemeGetGetWithHttpInfo(localAccountId: number, cursor: string, filtering: LocalFileVideoAwemeGetV30Filtering, orderFiled: LocalFileVideoAwemeGetV30OrderFiled, externalAction: LocalFileVideoAwemeGetV30ExternalAction, count: number): Promise<ApiResponse<LocalFileVideoAwemeGetV30Response>> {
    if (localAccountId == null) {
      throw new ApiException("Missing the required parameter 'localAccountId' when calling openApiV30LocalFileVideoAwemeGetGet");
    }

    if (cursor == null) {
      throw new ApiException("Missing the required parameter 'cursor' when calling openApiV30LocalFileVideoAwemeGetGet");
    }
    return this.apiClient.requestWithHttpInfo<LocalFileVideoAwemeGetV30Response>({
      method: "GET",
      path: "/open_api/v3.0/local/file/video/aweme/get/",
      queryParams: [
        { name: "local_account_id", value: localAccountId },
        { name: "filtering", value: filtering },
        { name: "order_filed", value: orderFiled },
        { name: "external_action", value: externalAction },
        { name: "count", value: count },
        { name: "cursor", value: cursor }
      ]
    });
  }
}


