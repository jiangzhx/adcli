import type { ExcludeSimpleRule, IncludeSimpleRule } from "../model/index";
export interface CombineSpec {
    include?: IncludeSimpleRule[];
    exclude?: ExcludeSimpleRule[];
}
