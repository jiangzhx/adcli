// Generated from github.com/bububa/kwai-marketing-api/api/dsp/target/template_upgrade.go
// Do not edit manually.

import type { SDKClient } from "../../../core";
import { TemplateUpgradeRequest, TemplateUpgradeRequestInit } from "../../../model/dsp/target";

export async function templateUpgrade(client: SDKClient, accessToken: string, req: TemplateUpgradeRequest | TemplateUpgradeRequestInit, signal?: AbortSignal): Promise<number> {
  const request = req instanceof TemplateUpgradeRequest ? req : new TemplateUpgradeRequest(req);
  const resp = await client.post<{ template_count?: number }>(accessToken, request, signal);
  return resp.template_count ?? 0;
}

export { templateUpgrade as TemplateUpgrade };
