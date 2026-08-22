// Generated from github.com/bububa/kwai-marketing-api/model/asset/adv_card.go
// Do not edit manually.

import type { KuaishouId } from "../types";
import type { Emoji } from "./emoji";

export interface AdvCard {
  adv_card_id?: KuaishouId;
  template_name?: string;
  unit_count?: number;
  url?: string;
  title?: string;
  sub_title?: string;
  price?: number;
  sale_price?: number;
  card_type?: number;
  content_type?: number;
  emoji_list?: Emoji[];
}
