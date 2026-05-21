// Generated from oceanengine/ad_open_sdk_java
// Phase: B
// Do not edit manually.

import type { ClueFormCreateV2ElementsAllowEmpty, ClueFormCreateV2ElementsElementType, ClueFormCreateV2ElementsIsUnique, ClueFormCreateV2ElementsLayer } from "../models";

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

