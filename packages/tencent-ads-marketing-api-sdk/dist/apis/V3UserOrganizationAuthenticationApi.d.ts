import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { UserOrganizationAuthenticationGetResponseData } from "../models";
export interface V3UserOrganizationAuthenticationApiGetRequest {
    userToken: string;
    accountIdList: number[];
    fields?: unknown;
}
export declare class V3UserOrganizationAuthenticationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3UserOrganizationAuthenticationApiGetRequest): Promise<UserOrganizationAuthenticationGetResponseData>;
    getWithHttpInfo(request: V3UserOrganizationAuthenticationApiGetRequest): Promise<ApiResponse<UserOrganizationAuthenticationGetResponseData>>;
}
