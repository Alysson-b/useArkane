export interface PixRes{
    id: Number
    qr_code: string
    qr_code_base64: string
    status?: string;
} 

export interface PixReq{
    valor: number
    descricao: string
    email: string | null | undefined
}


export interface CreditoDebitoProps {
    token?: string
    email?: string | undefined | null
    parcelas?: number
    payment_method_id?: string
    descricao?: string
    cpf?: string
    valor?: number
    id?: number
    status?: string,
    statusDetails?: string,
    url_autenticacao?: string
}