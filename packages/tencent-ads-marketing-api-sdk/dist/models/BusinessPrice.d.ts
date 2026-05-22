export declare const BusinessPrice: {
    readonly FREE: "BUSINESS_PRICE_FREE";
    readonly "1TO50": "BUSINESS_PRICE_1_TO_50";
    readonly "51TO100": "BUSINESS_PRICE_51_TO_100";
    readonly "101TO200": "BUSINESS_PRICE_101_TO_200";
    readonly "201TO1000": "BUSINESS_PRICE_201_TO_1000";
    readonly "1001TO3000": "BUSINESS_PRICE_1001_TO_3000";
    readonly "3001TO5000": "BUSINESS_PRICE_3001_TO_5000";
    readonly "5001TO8000": "BUSINESS_PRICE_5001_TO_8000";
    readonly "8001TO12000": "BUSINESS_PRICE_8001_TO_12000";
    readonly OUT_12000: "BUSINESS_PRICE_OUT_12000";
};
export type BusinessPrice = typeof BusinessPrice[keyof typeof BusinessPrice];
