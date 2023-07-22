export interface Contacts {
    id: string;
    code: string;
    firstName: string;
    lastName: string;
}

export interface Customers {
    contactId: string;
    id: string;
    firstName: string;
    lastName: string;
    permLabel: string;
    phone: string;
    email: string;
    userSiteSettings: boolean;
    userName: string;
    note: string; 
    isActive: boolean;
    children?: Customers[];   
}