export declare const TaskScope: {
    readonly UNKNOWN: "TASK_SCOPE_UNKNOWN";
    readonly CAMPAIGN: "TASK_SCOPE_CAMPAIGN";
    readonly ADGROUP: "TASK_SCOPE_ADGROUP";
    readonly ADVERTISER: "TASK_SCOPE_ADVERTISER";
    readonly SCHEDULED_TASK: "TASK_SCOPE_SCHEDULED_TASK";
    readonly AD: "TASK_SCOPE_AD";
    readonly ADCREATIVE: "TASK_SCOPE_ADCREATIVE";
    readonly PROJECT: "TASK_SCOPE_PROJECT";
    readonly BIDWORD: "TASK_SCOPE_BIDWORD";
    readonly COMMENT: "TASK_SCOPE_COMMENT";
    readonly DYNAMIC_CREATIVE: "TASK_SCOPE_DYNAMIC_CREATIVE";
    readonly ADEXPORT: "TASK_SCOPE_ADEXPORT";
    readonly COMPONENT: "TASK_SCOPE_COMPONENT";
    readonly IMAGE: "TASK_SCOPE_IMAGE";
    readonly VIDEO: "TASK_SCOPE_VIDEO";
};
export type TaskScope = typeof TaskScope[keyof typeof TaskScope];
