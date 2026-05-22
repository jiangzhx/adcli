import type { CustomerProfileAgeStruct, CustomerProfileIncomeStruct, LocalStoreCustomerProfileGender } from "../v3/index";
export interface CustomerProfileStruct {
    gender?: LocalStoreCustomerProfileGender;
    age?: CustomerProfileAgeStruct[];
    income?: CustomerProfileIncomeStruct[];
    vehicle?: string[];
}
