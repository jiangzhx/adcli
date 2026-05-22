import type { CommonPotentialStatus, ComponentGenerationType, ComponentScene, ComponentSubType, ComponentValue, FirstPublicationStatus, SimilarityStatus } from "../models";
export interface ComponentsGetListStruct {
    account_id?: number | string;
    organization_id?: number | string;
    component_id?: number | string;
    component_value?: ComponentValue;
    created_time?: number;
    last_modified_time?: number;
    component_sub_type?: ComponentSubType;
    component_custom_name?: string;
    generation_type?: ComponentGenerationType;
    is_deleted?: boolean;
    similarity_status?: SimilarityStatus;
    potential_status?: CommonPotentialStatus;
    disable_message?: string;
    first_publication_status?: FirstPublicationStatus;
    scene?: ComponentScene;
}
