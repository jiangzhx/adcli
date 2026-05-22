import type { CustomerProfileAgeStruct, CustomerProfileIncomeStruct, LocalStoreCustomerProfileGender } from "../models";
export interface CustomerProfileStruct {
    gender?: LocalStoreCustomerProfileGender;
    age?: CustomerProfileAgeStruct[];
    income?: CustomerProfileIncomeStruct[];
    vehicle?: string[];
}
