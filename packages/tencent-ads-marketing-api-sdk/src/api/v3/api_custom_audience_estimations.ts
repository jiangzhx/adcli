// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_custom_audience_estimations.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { CustomAudienceEstimationsGetResponseData, EstimationAudienceSpec } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface CustomAudienceEstimationsApiGetRequest {
  accountId: number | string;
  type_: string;
  audienceSpec: EstimationAudienceSpec;
  fields?: unknown;
}


export class CustomAudienceEstimationsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: CustomAudienceEstimationsApiGetRequest): Promise<CustomAudienceEstimationsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: CustomAudienceEstimationsApiGetRequest): Promise<ApiResponse<CustomAudienceEstimationsGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.type_ == null) {
      throw new ApiException("Missing the required parameter 'type_' when calling get");
    }

    if (request.audienceSpec == null) {
      throw new ApiException("Missing the required parameter 'audienceSpec' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<CustomAudienceEstimationsGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/custom_audience_estimations/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "type", value: request.type_ },
        { name: "audience_spec", value: request.audienceSpec },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


