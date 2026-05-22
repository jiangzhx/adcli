// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import { ApiClient } from "../runtime/ApiClient";
import { ApiException } from "../runtime/ApiException";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { SubscribeAccountsListV30AccountType, SubscribeAccountsListV30Response, SubscribeAccountsListV30Source, SubscribeAccountsListV30Statuses, SubscribeAccountsListV30SubscribePackageType } from "../models";


export class SubscribeAccountsListV30Api {
  constructor(private apiClient = new ApiClient()) {}

  getApiClient() {
    return this.apiClient;
  }

  setApiClient(apiClient: ApiClient) {
    this.apiClient = apiClient;
  }

  async openApiV30SubscribeAccountsListGet(apPAccessToken: string, appId: number, subscribeTaskId: number, events: string[], coreUserId: number, advertiserIds: number[], statuses: SubscribeAccountsListV30Statuses[], cursor: number, count: number, subscribePackageType: SubscribeAccountsListV30SubscribePackageType, source: SubscribeAccountsListV30Source, accountType: SubscribeAccountsListV30AccountType): Promise<SubscribeAccountsListV30Response> {
    const response = await this.openApiV30SubscribeAccountsListGetWithHttpInfo(apPAccessToken, appId, subscribeTaskId, events, coreUserId, advertiserIds, statuses, cursor, count, subscribePackageType, source, accountType);
    return response.data;
  }

  async openApiV30SubscribeAccountsListGetWithHttpInfo(apPAccessToken: string, appId: number, subscribeTaskId: number, events: string[], coreUserId: number, advertiserIds: number[], statuses: SubscribeAccountsListV30Statuses[], cursor: number, count: number, subscribePackageType: SubscribeAccountsListV30SubscribePackageType, source: SubscribeAccountsListV30Source, accountType: SubscribeAccountsListV30AccountType): Promise<ApiResponse<SubscribeAccountsListV30Response>> {
    if (apPAccessToken == null) {
      throw new ApiException("Missing the required parameter 'apPAccessToken' when calling openApiV30SubscribeAccountsListGet");
    }

    if (appId == null) {
      throw new ApiException("Missing the required parameter 'appId' when calling openApiV30SubscribeAccountsListGet");
    }
    return this.apiClient.requestWithHttpInfo<SubscribeAccountsListV30Response>({
      method: "GET",
      path: "/open_api/v3.0/subscribe/accounts/list/",
      queryParams: [
        { name: "app_id", value: appId },
        { name: "subscribe_task_id", value: subscribeTaskId },
        { name: "core_user_id", value: coreUserId },
        { name: "cursor", value: cursor },
        { name: "count", value: count },
        { name: "subscribe_package_type", value: subscribePackageType },
        { name: "source", value: source },
        { name: "account_type", value: accountType },
        { name: "events", value: events, collectionFormat: "csv" },
        { name: "advertiser_ids", value: advertiserIds, collectionFormat: "csv" },
        { name: "statuses", value: statuses, collectionFormat: "csv" }
      ]
    });
  }
}


