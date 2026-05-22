// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { QualificationStructureGetResponseData } from "../models";

export interface V3QualificationStructureApiGetRequest {
  accountId: number | string;
  qualificationCode: string;
  fields?: unknown;
}


export class V3QualificationStructureApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3QualificationStructureApiGetRequest): Promise<QualificationStructureGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3QualificationStructureApiGetRequest): Promise<ApiResponse<QualificationStructureGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.qualificationCode == null) {
      throw new ApiException("Missing the required parameter 'qualificationCode' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<QualificationStructureGetResponseData>({
      method: "GET",
      path: "/qualification_structure/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "qualification_code", value: request.qualificationCode },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


