export interface PixRes{
    id: Number
    qr_code: string
    qr_code_base64: string
    status?: string;
} 

export interface PixReq{
    valor: number
    descricao: string
    email: string
}


export interface CreditoDebitoProps {
    token: string
    email: string
    parcelas: number
    bandeiraCartao: string
    tipo: string
    valor: number
    cpf?: string
}