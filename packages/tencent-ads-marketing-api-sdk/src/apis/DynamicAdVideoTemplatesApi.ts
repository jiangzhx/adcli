// Generated from tencentad/marketing-api-go-sdk
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { DynamicAdVideoTemplatesGetResponseData } from "../models";

export interface DynamicAdVideoTemplatesApiGetRequest {
  accountId: number | string;
  productCatalogId: number | string;
  adcreativeTemplateId: number | string;
  productMode: string;
  supportChannel?: boolean;
  page?: number;
  pageSize?: number;
  templateIdList?: unknown;
  templateName?: string;
  dynamicAdTemplateOwnershipType?: string;
  fields?: unknown;
}


export class DynamicAdVideoTemplatesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: DynamicAdVideoTemplatesApiGetRequest): Promise<DynamicAdVideoTemplatesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: DynamicAdVideoTemplatesApiGetRequest): Promise<ApiResponse<DynamicAdVideoTemplatesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.productCatalogId == null) {
      throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
    }

    if (request.adcreativeTemplateId == null) {
      throw new ApiException("Missing the required parameter 'adcreativeTemplateId' when calling get");
    }

    if (request.productMode == null) {
      throw new ApiException("Missing the required parameter 'productMode' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DynamicAdVideoTemplatesGetResponseData>({
      method: "GET",
      path: "/dynamic_ad_video_templates/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "product_catalog_id", value: request.productCatalogId },
        { name: "adcreative_template_id", value: request.adcreativeTemplateId },
        { name: "product_mode", value: request.productMode },
        { name: "support_channel", value: request.supportChannel },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "template_id_list", value: request.templateIdList, collectionFormat: "multi" },
        { name: "template_name", value: request.templateName },
        { name: "dynamic_ad_template_ownership_type", value: request.dynamicAdTemplateOwnershipType },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


