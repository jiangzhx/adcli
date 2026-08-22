// Generated from github.com/bububa/kwai-marketing-api/api/dmp/population_update_v2.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { PopulationUpdateRequestv2, PopulationUpdateRequestv2Init, PopulationV2 } from "../../model/dmp";

export async function populationUpdateV2(client: SDKClient, accessToken: string, req: PopulationUpdateRequestv2 | PopulationUpdateRequestv2Init, signal?: AbortSignal): Promise<PopulationV2> {
  const request = req instanceof PopulationUpdateRequestv2 ? req : new PopulationUpdateRequestv2(req);
  return client.post<PopulationV2>(accessToken, request, signal);
}

export { populationUpdateV2 as PopulationUpdateV2 };
