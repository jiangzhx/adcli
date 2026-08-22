// Generated from github.com/bububa/kwai-marketing-api/api/unit/ocpc_conversion_infos.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { OcpcConversionInfosRequest, OcpcConversionInfosRequestInit, OcpcConversionInfosResponse } from "../../model/unit";

export async function ocpcConversionInfos(client: SDKClient, accessToken: string, req: OcpcConversionInfosRequest | OcpcConversionInfosRequestInit, signal?: AbortSignal): Promise<OcpcConversionInfosResponse> {
  const request = req instanceof OcpcConversionInfosRequest ? req : new OcpcConversionInfosRequest(req);
  return client.get<OcpcConversionInfosResponse>(accessToken, request, signal);
}

export { ocpcConversionInfos as OcpcConversionInfos };
