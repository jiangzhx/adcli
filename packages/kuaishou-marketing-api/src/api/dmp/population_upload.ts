// Generated from github.com/bububa/kwai-marketing-api/api/dmp/population_upload.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { PopulationUploadRequest, PopulationUploadRequestInit, Population } from "../../model/dmp";

export async function populationUpload(client: SDKClient, accessToken: string, req: PopulationUploadRequest | PopulationUploadRequestInit, signal?: AbortSignal): Promise<Population> {
  const request = req instanceof PopulationUploadRequest ? req : new PopulationUploadRequest(req);
  return client.upload<Population>(accessToken, request, signal);
}

export { populationUpload as PopulationUpload };
