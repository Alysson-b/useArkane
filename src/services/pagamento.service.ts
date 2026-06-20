import { api } from "./api";

import {PixReq, PixRes} from "../types/payments";


export async function gerarQrCode(dados: PixReq): Promise <PixRes> {
    const {data} =  await api.post<PixRes>("/api/payments/pix", dados)
    
    return data
}