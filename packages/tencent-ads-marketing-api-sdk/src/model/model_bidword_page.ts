// Generated from tencentad/marketing-api-go-sdk pkg/model/model_bidword_page.go
// Do not edit manually.

import type { DeepLinkSpecStruct, LingqueSpecStruct, MiniProgramSpecStruct, PageTypeRead, UniversalLinkSpecStruct, XijingSpecStruct } from "../model/index";

export interface BidwordPage {
  page_type?: PageTypeRead;
  page_url?: string;
  mini_program_spec?: MiniProgramSpecStruct;
  deep_link_spec?: DeepLinkSpecStruct;
  universal_link_spec?: UniversalLinkSpecStruct;
  xijing_spec?: XijingSpecStruct;
  lingque_spec?: LingqueSpecStruct;
}

