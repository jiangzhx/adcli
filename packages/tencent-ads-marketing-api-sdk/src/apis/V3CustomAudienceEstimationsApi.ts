// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { CustomAudienceEstimationsGetResponseData, EstimationAudienceSpec } from "../models";

export interface V3CustomAudienceEstimationsApiGetRequest {
  accountId: number | string;
  type_: string;
  audienceSpec: EstimationAudienceSpec;
  fields?: unknown;
}


export class V3CustomAudienceEstimationsApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: V3CustomAudienceEstimationsApiGetRequest): Promise<CustomAudienceEstimationsGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: V3CustomAudienceEstimationsApiGetRequest): Promise<ApiResponse<CustomAudienceEstimationsGetResponseData>> {
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


