export interface Contact {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface ContactData {
  contacts: Contact[];
}

export interface ContactAddedData {
  contactAdded: Contact | null;
}

export interface Message {
  id: string;
  body: string;
  type: 'success' | 'danger';
}
