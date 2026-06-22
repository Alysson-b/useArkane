import { api } from "./api";

import {CreditoDebitoProps, PixReq, PixRes} from "../types/payments";


export async function gerarQrCode(dados: PixReq): Promise <PixRes> {
    const {data} =  await api.post<PixRes>("/api/payments/pix", dados)
    
    return data
}


export async function creditoDebitoPagamento(dados: CreditoDebitoProps): Promise<CreditoDebitoProps> {
    const {data} = await api.post<CreditoDebitoProps>("/api/payments/credito/debito", dados)
    return data
}