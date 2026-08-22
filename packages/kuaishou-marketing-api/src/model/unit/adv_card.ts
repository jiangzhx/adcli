// Generated from github.com/bububa/kwai-marketing-api/model/unit/adv_card.go
// Do not edit manually.

import type { KuaishouId } from "../types";

export interface AdvCard {
  adv_card_id?: KuaishouId;
  card_type?: number;
  url?: string;
  title?: string;
  sub_title?: string;
  price?: number;
  sale_price?: number;
}
