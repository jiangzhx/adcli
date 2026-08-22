// Generated from github.com/bububa/kwai-marketing-api/api/dmp/population_upload_file_v2.go
// Do not edit manually.

import type { SDKClient } from "../../core";
import { PopulationUploadFileRequest, PopulationUploadFileRequestInit, FileV2 } from "../../model/dmp";

export async function populationUploadFileV2(client: SDKClient, accessToken: string, req: PopulationUploadFileRequest | PopulationUploadFileRequestInit, signal?: AbortSignal): Promise<FileV2> {
  const request = req instanceof PopulationUploadFileRequest ? req : new PopulationUploadFileRequest(req);
  return client.upload<FileV2>(accessToken, request, signal);
}

export { populationUploadFileV2 as PopulationUploadFileV2 };
