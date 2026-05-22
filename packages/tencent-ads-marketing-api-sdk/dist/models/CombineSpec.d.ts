import type { ExcludeSimpleRule, IncludeSimpleRule } from "../models";
export interface CombineSpec {
    include?: IncludeSimpleRule[];
    exclude?: ExcludeSimpleRule[];
}
