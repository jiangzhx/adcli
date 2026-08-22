// Generated from github.com/bububa/kwai-marketing-api/api/dsp/dpa/secret_cid_link.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { SecretCidLinkRequest, SecretCidLinkRequestInit } from "../../../model/dsp/dpa";

export async function secretCidLink(client: SDKClient, accessToken: string, req: SecretCidLinkRequest | SecretCidLinkRequestInit, signal?: AbortSignal): Promise<void> {
  const request = req instanceof SecretCidLinkRequest ? req : new SecretCidLinkRequest(req);
  await client.post<unknown>(accessToken, request, signal);
}

export { secretCidLink as SecretCidLink };
