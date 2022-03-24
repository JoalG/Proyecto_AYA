export interface Bill{
    nis: string,
    clientIdType: string,
    clientId: string,
    date: Date,
    billingNumber: string,
    consumption: number,
    expirationDate: Date,
    documentType: string,
    state: string,
    amount: string,
    others: string,
    total: string
}