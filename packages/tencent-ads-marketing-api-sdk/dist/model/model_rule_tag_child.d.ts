import type { RuleLabTag, RuleTagChildStr } from "../model/index";
export interface RuleTagChild {
    tag_id?: number | string;
    parent_id?: number | string;
    value?: string;
    name?: string;
    level?: number;
    type?: RuleLabTag;
    children?: RuleTagChildStr[];
}
