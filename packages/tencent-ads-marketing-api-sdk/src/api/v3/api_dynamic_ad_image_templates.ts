// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_dynamic_ad_image_templates.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { DynamicAdImageTemplatesGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface DynamicAdImageTemplatesApiGetRequest {
  accountId: number | string;
  productCatalogId: number | string;
  productMode: string;
  dynamicAdTemplateWidth: number;
  dynamicAdTemplateHeight: number;
  dynamicAdTemplateOwnershipType?: string;
  filtering?: unknown;
  page?: number;
  pageSize?: number;
  templateIdList?: unknown;
  templateName?: string;
  fields?: unknown;
}


export class DynamicAdImageTemplatesApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async get(request: DynamicAdImageTemplatesApiGetRequest): Promise<DynamicAdImageTemplatesGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: DynamicAdImageTemplatesApiGetRequest): Promise<ApiResponse<DynamicAdImageTemplatesGetResponseData>> {
    if (request.accountId == null) {
      throw new ApiException("Missing the required parameter 'accountId' when calling get");
    }

    if (request.productCatalogId == null) {
      throw new ApiException("Missing the required parameter 'productCatalogId' when calling get");
    }

    if (request.productMode == null) {
      throw new ApiException("Missing the required parameter 'productMode' when calling get");
    }

    if (request.dynamicAdTemplateWidth == null) {
      throw new ApiException("Missing the required parameter 'dynamicAdTemplateWidth' when calling get");
    }

    if (request.dynamicAdTemplateHeight == null) {
      throw new ApiException("Missing the required parameter 'dynamicAdTemplateHeight' when calling get");
    }
    return this.apiClient.requestWithHttpInfo<DynamicAdImageTemplatesGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/dynamic_ad_image_templates/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "product_catalog_id", value: request.productCatalogId },
        { name: "product_mode", value: request.productMode },
        { name: "dynamic_ad_template_ownership_type", value: request.dynamicAdTemplateOwnershipType },
        { name: "dynamic_ad_template_width", value: request.dynamicAdTemplateWidth },
        { name: "dynamic_ad_template_height", value: request.dynamicAdTemplateHeight },
        { name: "filtering", value: request.filtering, collectionFormat: "multi" },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "template_id_list", value: request.templateIdList, collectionFormat: "multi" },
        { name: "template_name", value: request.templateName },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


