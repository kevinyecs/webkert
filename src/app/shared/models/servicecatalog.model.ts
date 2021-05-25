import { RelatedParty } from "./relatedparty.model";
import { ServiceCategoryRef } from "./servicecategoryref.model";


export interface ServiceCatalog{


    category?: string, //ServiceCategoryRef[],
    description: string,
    href: string,
    id: string,
    lastUpdate?: Date,
    lifecycleStatus?: string,
    name: string,
    relatedParty?: string,//RelatedParty[],
    validFor?: Date[],
    version?: string
}