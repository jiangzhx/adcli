// Generated from tencentad/marketing-api-go-sdk pkg/api/v3/api_material_dcatag.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { MaterialDcatagAddRequest, MaterialDcatagAddResponseData, MaterialDcatagGetResponseData } from "../../model/v3/index";
import { DefaultConfiguration as TencentAdsV30Configuration } from "../../config/v3/configuration";

export interface MaterialDcatagApiAddRequest {
  data: MaterialDcatagAddRequest;
}

export interface MaterialDcatagApiGetRequest {
  accountId?: number | string;
  imageIdList?: unknown;
  mediaIdList?: unknown;
  marketingAssetId?: number | string;
  marketingTargetType?: string;
  marketingAssetOuterSpec?: unknown;
  page?: number;
  pageSize?: number;
  fields?: unknown;
}


export class MaterialDcatagApi {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async add(request: MaterialDcatagApiAddRequest): Promise<MaterialDcatagAddResponseData> {
    const response = await this.addWithHttpInfo(request);
    return response.data;
  }

  async addWithHttpInfo(request: MaterialDcatagApiAddRequest): Promise<ApiResponse<MaterialDcatagAddResponseData>> {
    if (request.data == null) {
      throw new ApiException("Missing the required parameter 'data' when calling add");
    }
    return this.apiClient.requestWithHttpInfo<MaterialDcatagAddResponseData>({
      method: "POST",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/material_dcatag/add",
      queryParams: [

      ],
      contentType: "application/json",
      body: request.data
    });
  }

  async get(request: MaterialDcatagApiGetRequest): Promise<MaterialDcatagGetResponseData> {
    const response = await this.getWithHttpInfo(request);
    return response.data;
  }

  async getWithHttpInfo(request: MaterialDcatagApiGetRequest): Promise<ApiResponse<MaterialDcatagGetResponseData>> {

    return this.apiClient.requestWithHttpInfo<MaterialDcatagGetResponseData>({
      method: "GET",
      basePath: TencentAdsV30Configuration.basePath,
      path: "/material_dcatag/get",
      queryParams: [
        { name: "account_id", value: request.accountId },
        { name: "image_id_list", value: request.imageIdList, collectionFormat: "multi" },
        { name: "media_id_list", value: request.mediaIdList, collectionFormat: "multi" },
        { name: "marketing_asset_id", value: request.marketingAssetId },
        { name: "marketing_target_type", value: request.marketingTargetType },
        { name: "marketing_asset_outer_spec", value: request.marketingAssetOuterSpec },
        { name: "page", value: request.page },
        { name: "page_size", value: request.pageSize },
        { name: "fields", value: request.fields, collectionFormat: "multi" }
      ],
      contentType: "text/plain"
    });
  }

}


