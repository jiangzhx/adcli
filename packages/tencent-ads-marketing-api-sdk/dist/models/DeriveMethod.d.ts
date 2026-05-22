import type { DeriveMethodType } from "../models";
export interface DeriveMethod {
    derive_method_type?: DeriveMethodType;
    derive_method_name?: string;
    is_selected?: boolean;
    is_new?: boolean;
    style_img?: string;
}
