export declare const FilterOperator: {
    readonly EQUALS: "EQUALS";
    readonly CONTAINS: "CONTAINS";
    readonly LESS_EQUALS: "LESS_EQUALS";
    readonly LESS: "LESS";
    readonly GREATER_EQUALS: "GREATER_EQUALS";
    readonly GREATER: "GREATER";
    readonly IN: "IN";
    readonly NOT_EQUALS: "NOT_EQUALS";
    readonly NOT_IN: "NOT_IN";
};
export type FilterOperator = typeof FilterOperator[keyof typeof FilterOperator];
