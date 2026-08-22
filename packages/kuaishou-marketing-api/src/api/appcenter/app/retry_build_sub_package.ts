// Generated from github.com/bububa/kwai-marketing-api/api/appcenter/app/retry_build_sub_package.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { RetryBuildSubPackageRequest, RetryBuildSubPackageRequestInit } from "../../../model/appcenter/app";

export async function retryBuildSubPackage(client: SDKClient, accessToken: string, req: RetryBuildSubPackageRequest | RetryBuildSubPackageRequestInit, signal?: AbortSignal): Promise<number> {
  const request = req instanceof RetryBuildSubPackageRequest ? req : new RetryBuildSubPackageRequest(req);
  const resp = await client.post<{ retry_cnt?: number }>(accessToken, request, signal);
  return resp.retry_cnt ?? 0;
}

export { retryBuildSubPackage as RetryBuildSubPackage };
