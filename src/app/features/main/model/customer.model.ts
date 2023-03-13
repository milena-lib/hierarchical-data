export interface Customer {
    id: string;
    code: string;
    firstName: string;
    lastName: string;
}

export interface Contacts {
    customerId: string;
    id: string;
    firstName: string;
    lastName: string;
    permLabel: string;
    phone: string;
    email: string;
    userSiteSettings: boolean;
    userName: string;
    note: string; 
    contact?: Contacts[];   
}