// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { WechatPagesCsgroupUserGetResponseData } from "../models";

export interface V3WechatPagesCsgroupUserApiGetRequest {
  accountId: number | string;
  corpId: string;
  departmentId?: number | string;
  fields?: unknown;
}


export class V3WechatPagesCsgroupUserApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3WechatPagesCsgroupUserApiGetRequest): Promise<WechatPagesCsgroupUserGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3WechatPagesCsgroupUserApiGetRequest): Promise<ApiResponse<WechatPagesCsgroupUserGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.corpId == null) {
      throw new ApiException("Missing the required parameter 'corpId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<WechatPagesCsgroupUserGetResponseData>({
      method: "GET",
      path: "/wechat_pages_csgroup_user/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "corp_id", value: request.corpId },
        { name: "department_id", value: request.departmentId },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


