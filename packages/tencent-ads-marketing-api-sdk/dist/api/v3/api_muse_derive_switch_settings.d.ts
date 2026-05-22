import { ApiClient, type ApiResponse } from "./client";
import type { MuseDeriveSwitchSettingsGetResponseData } from "../../model/v3/index";
export interface MuseDeriveSwitchSettingsApiGetRequest {
    accountId: number | string;
    marketingTargetType: string;
    marketingCarrierType: string;
    automaticSiteEnabled?: boolean;
    siteSet?: unknown;
    fields?: unknown;
}
export declare class MuseDeriveSwitchSettingsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    getApiClient(): ApiClient;
    setApiClient(apiClient: ApiClient): void;
    get(request: MuseDeriveSwitchSettingsApiGetRequest): Promise<MuseDeriveSwitchSettingsGetResponseData>;
    getWithHttpInfo(request: MuseDeriveSwitchSettingsApiGetRequest): Promise<ApiResponse<MuseDeriveSwitchSettingsGetResponseData>>;
}
