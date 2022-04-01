export interface ReporteAveria{
    _id?: string,
    provincia: string,
    canton: string,
    distrito: string,
    nis: string,
    name: string,
    lastname: string,
    phoneNumber: string,
    email: string,
    description: string,
    type: string,
    state: number,
    creationDate?: Date
}