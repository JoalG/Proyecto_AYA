export interface Payment {
    nis: string,
    clientIdType: string,
    clientId: string,
    facturacionDate: Date,
    pagoDate: Date,
    recaudador: string,
    agencia: string,
    total: string
}
