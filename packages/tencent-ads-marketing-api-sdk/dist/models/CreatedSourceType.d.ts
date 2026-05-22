export declare const CreatedSourceType: {
    readonly UNKNOWN: "CREATE_SOURCE_TYPE_UNKNOWN";
    readonly REWARD_QUEST: "CREATE_SOURCE_TYPE_REWARD_QUEST";
    readonly FREETRADE: "CREATE_SOURCE_TYPE_FREETRADE";
};
export type CreatedSourceType = typeof CreatedSourceType[keyof typeof CreatedSourceType];
