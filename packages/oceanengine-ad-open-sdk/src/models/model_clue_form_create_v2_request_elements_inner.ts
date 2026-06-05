// 由 oceanengine/ad_open_sdk_go models/model_clue_form_create_v2_request_elements_inner.go 生成
// 不要手动编辑。

import type { ClueFormCreateV2ElementsAllowEmpty, ClueFormCreateV2ElementsElementType, ClueFormCreateV2ElementsIsUnique, ClueFormCreateV2ElementsLayer } from "../models/index";

export interface ClueFormCreateV2RequestElementsInner {
  allow_empty?: ClueFormCreateV2ElementsAllowEmpty;
  default_value?: number;
  element_type: ClueFormCreateV2ElementsElementType;
  is_unique?: ClueFormCreateV2ElementsIsUnique;
  label: string;
  layer?: ClueFormCreateV2ElementsLayer;
  sequence?: number;
  value?: string;
}

