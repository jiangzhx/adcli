// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_qualification_structure.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { QualificationStructureGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface QualificationStructureApiGetRequest {
  accountId: number | string;
  qualificationCode: string;
  fields?: unknown;
}


export class QualificationStructureApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: QualificationStructureApiGetRequest): Promise<QualificationStructureGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: QualificationStructureApiGetRequest): Promise<ApiResponse<QualificationStructureGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.qualificationCode == null) {
      throw new ApiException("Missing the required parameter 'qualificationCode' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<QualificationStructureGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
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


