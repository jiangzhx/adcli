// Generated from github.com/bububa/kwai-marketing-api/api/dmp/population_upload_v2.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { PopulationUploadRequestV2, PopulationUploadRequestV2Init, PopulationV2 } from "../../model/dmp";

export async function populationUploadV2(client: SDKClient, accessToken: string, req: PopulationUploadRequestV2 | PopulationUploadRequestV2Init, signal?: AbortSignal): Promise<PopulationV2> {
  const request = req instanceof PopulationUploadRequestV2 ? req : new PopulationUploadRequestV2(req);
  return client.post<PopulationV2>(accessToken, request, signal);
}

export { populationUploadV2 as PopulationUploadV2 };
