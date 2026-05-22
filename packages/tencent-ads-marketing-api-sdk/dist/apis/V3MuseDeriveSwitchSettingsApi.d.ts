import { ApiClient } from "../runtime/ApiClient";
import type { ApiResponse } from "../runtime/ApiResponse";
import type { MuseDeriveSwitchSettingsGetResponseData } from "../models";
export interface V3MuseDeriveSwitchSettingsApiGetRequest {
    accountId: number | string;
    marketingTargetType: string;
    marketingCarrierType: string;
    automaticSiteEnabled?: boolean;
    siteSet?: unknown;
    fields?: unknown;
}
export declare class V3MuseDeriveSwitchSettingsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: V3MuseDeriveSwitchSettingsApiGetRequest): Promise<MuseDeriveSwitchSettingsGetResponseData>;
    getWithHttpInfo(request: V3MuseDeriveSwitchSettingsApiGetRequest): Promise<ApiResponse<MuseDeriveSwitchSettingsGetResponseData>>;
}
