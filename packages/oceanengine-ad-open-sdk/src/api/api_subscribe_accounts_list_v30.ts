// Generated from oceanengine/ad_open_sdk_go api/api_subscribe_accounts_list_v30.go
// Do not edit manually.

import { ApiClient, ApiException, type ApiResponse } from "./client";
import type { SubscribeAccountsListV30AccountType, SubscribeAccountsListV30Response, SubscribeAccountsListV30Source, SubscribeAccountsListV30Statuses, SubscribeAccountsListV30SubscribePackageType } from "../models/index";


export interface SubscribeAccountsListV30ApiOpenApiV30SubscribeAccountsListGetRequest {
  aPPAccessToken: string;
  appId: number | string;
  subscribeTaskId?: number | string;
  events?: string[];
  coreUserId?: number | string;
  advertiserIds?: (number | string)[];
  statuses?: SubscribeAccountsListV30Statuses[];
  cursor?: number;
  count?: number;
  subscribePackageType?: SubscribeAccountsListV30SubscribePackageType;
  source?: SubscribeAccountsListV30Source;
  accountType?: SubscribeAccountsListV30AccountType;
}

export class SubscribeAccountsListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SubscribeAccountsListGet(request: SubscribeAccountsListV30ApiOpenApiV30SubscribeAccountsListGetRequest): Promise<SubscribeAccountsListV30Response> {
    const response = await this.openApiV30SubscribeAccountsListGetWithHttpInfo(request);
    return response.data;
  }

  async openApiV30SubscribeAccountsListGetWithHttpInfo(request: SubscribeAccountsListV30ApiOpenApiV30SubscribeAccountsListGetRequest): Promise<ApiResponse<SubscribeAccountsListV30Response>> {
    if (request.aPPAccessToken == null) {
      throw new ApiException("aPPAccessToken is required and must be specified");
    }

    if (request.appId == null) {
      throw new ApiException("appId is required and must be specified");
    }
    return this.apiClient.requestWithHttpInfo<SubscribeAccountsListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/subscribe/accounts/list/",
      queryParams: [
        { name: "app_id", value: request.appId },
        { name: "subscribe_task_id", value: request.subscribeTaskId },
        { name: "events", value: request.events },
        { name: "core_user_id", value: request.coreUserId },
        { name: "advertiser_ids", value: request.advertiserIds },
        { name: "statuses", value: request.statuses },
        { name: "cursor", value: request.cursor },
        { name: "count", value: request.count },
        { name: "subscribe_package_type", value: request.subscribePackageType },
        { name: "source", value: request.source },
        { name: "account_type", value: request.accountType }
      ]
    });
  }
}


