import type { AutoAcquisitionStatus, CostGuaranteeStatus, LearningStatus, OperateSuggestion, ResponseDetailStruct, ResponsePotentialStruct } from "../model/index";
export interface BatchAdDiagnosisListItem {
    adgroup_id?: number | string;
    diagnose_time?: string;
    operate_suggestion?: OperateSuggestion;
    learning_status?: LearningStatus;
    cost_guarantee_status?: CostGuaranteeStatus;
    cost_guarantee_money?: number;
    exposure_compete_score?: string;
    exposure_raise_rate?: string;
    cpa_bias_today?: string;
    cpa_bias_overall?: string;
    is_ocpx?: boolean;
    optimization_goal?: string;
    deep_optimization_goal?: string;
    conclusion_description?: string;
    has_diagnose_detail?: boolean;
    operate_suggestion_desc?: string;
    learning_status_desc?: string;
    exposure_compete_score_desc?: string;
    detail?: ResponseDetailStruct;
    auto_acquisition_status?: AutoAcquisitionStatus;
    auto_acquisition_status_name?: string;
    auto_acquisition_status_desc?: string;
    auto_acquisition_begin_time?: string;
    auto_acquisition_end_time?: string;
    is_potential?: boolean;
    potential_detail?: ResponsePotentialStruct;
}
