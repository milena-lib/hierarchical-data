export interface Customer {
    id: string;
    code: string;
    firstName: string;
    lastName: string;
}

export interface CustomerFullDetails{
    contact: Contact[];
}

export interface Contact {
    id: string;
    firstName: string;
    lastName: string;
    permLabel: string;
    phone: string;
    email: string;
    userSiteSettings: boolean;
    userName: string;
    note: string; 
    contact?: Contact[];    
}