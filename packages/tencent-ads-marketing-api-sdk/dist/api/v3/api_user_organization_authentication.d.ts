import { ApiClient, type ApiResponse } from "./client";
import type { UserOrganizationAuthenticationGetResponseData } from "../../model/v3/index";
export interface UserOrganizationAuthenticationApiGetRequest {
    userToken: string;
    accountIdList: number[];
    fields?: unknown;
}
export declare class UserOrganizationAuthenticationApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: UserOrganizationAuthenticationApiGetRequest): Promise<UserOrganizationAuthenticationGetResponseData>;
    getWithHttpInfo(request: UserOrganizationAuthenticationApiGetRequest): Promise<ApiResponse<UserOrganizationAuthenticationGetResponseData>>;
}
