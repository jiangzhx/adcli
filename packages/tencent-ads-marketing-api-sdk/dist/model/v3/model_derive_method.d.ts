import type { DeriveMethodType } from "../v3/index";
export interface DeriveMethod {
    derive_method_type?: DeriveMethodType;
    derive_method_name?: string;
    is_selected?: boolean;
    is_new?: boolean;
    style_img?: string;
}
