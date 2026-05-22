// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SceneSpecTagsGetResponseData } from "../models";

export interface V3SceneSpecTagsApiGetRequest {
  accountId: number | string;
  type_: string;
  fields?: unknown;
}


export class V3SceneSpecTagsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3SceneSpecTagsApiGetRequest): Promise<SceneSpecTagsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3SceneSpecTagsApiGetRequest): Promise<ApiResponse<SceneSpecTagsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.type_ == null) {
      throw new ApiException("Missing the required parameter 'type_' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<SceneSpecTagsGetResponseData>({
      method: "GET",
      path: "/scene_spec_tags/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "type", value: request.type_ },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


