import type { DeriveDataVersion } from "../models";
export interface ProgrammedCommponentPreviewTemplateUpdateResponseData {
    material_derive_id?: number | string;
    derive_data_version?: DeriveDataVersion;
    component_id?: number | string;
    material_preview_id?: number | string;
    template_id?: number | string;
    template_preview_url?: string;
}
