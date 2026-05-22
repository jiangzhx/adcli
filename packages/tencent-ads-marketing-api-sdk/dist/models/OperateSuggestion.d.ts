export declare const OperateSuggestion: {
    readonly OBSERVATION: "OPERATE_SUGGESTION_OBSERVATION";
    readonly OPERATION: "OPERATE_SUGGESTION_OPERATION";
    readonly PAUSE: "OPERATE_SUGGESTION_PAUSE";
    readonly FINE_PLAY: "OPERATE_SUGGESTION_FINE_PLAY";
    readonly SUSPEND: "OPERATE_SUGGESTION_SUSPEND";
    readonly TRAFFIC: "OPERATE_SUGGESTION_TRAFFIC";
    readonly LOWPOTENTIAL: "OPERATE_SUGGESTION_LOWPOTENTIAL";
};
export type OperateSuggestion = typeof OperateSuggestion[keyof typeof OperateSuggestion];
