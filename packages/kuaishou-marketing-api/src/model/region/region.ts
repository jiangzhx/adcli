// Generated from github.com/bububa/kwai-marketing-api/model/region/region.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface Region {
  id?: KuaishouId;
  level?: number;
  name?: string;
  parent?: number;
  children?: number[];
}
