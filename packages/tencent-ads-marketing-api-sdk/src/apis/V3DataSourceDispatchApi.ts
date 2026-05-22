// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DataSourceDispatchGetResponseData } from "../models";

export interface V3DataSourceDispatchApiGetRequest {
  accountId: number | string;
  userActionSetId?: number | string;
  type_?: string;
  name?: string;
  scenes?: unknown;
  switchType?: string;
  accessWay?: string;
  fields?: unknown;
}


export class V3DataSourceDispatchApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3DataSourceDispatchApiGetRequest): Promise<DataSourceDispatchGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3DataSourceDispatchApiGetRequest): Promise<ApiResponse<DataSourceDispatchGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DataSourceDispatchGetResponseData>({
      method: "GET",
      path: "/data_source_dispatch/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "user_action_set_id", value: request.userActionSetId },
        { name: "type", value: request.type_ },
        { name: "name", value: request.name },
        { name: "scenes", value: request.scenes, collectionFormat: "multi" },
        { name: "switch_type", value: request.switchType },
        { name: "access_way", value: request.accessWay },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


