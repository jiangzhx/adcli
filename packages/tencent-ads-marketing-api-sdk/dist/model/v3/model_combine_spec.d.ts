import type { ExcludeSimpleRule, IncludeSimpleRule } from "../v3/index";
export interface CombineSpec {
    include?: IncludeSimpleRule[];
    exclude?: ExcludeSimpleRule[];
}
