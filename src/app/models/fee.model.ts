export interface Fee{
    roomCategoryFeeId:number,
    publicFee: number;
    date: Date;
    incrementRate: number;
}


export interface FeeRequestDTO extends Omit<Fee,'id'>{
    roomCategoryId:number
}

export interface FeeResponseDTO extends Fee{
    roomCategoryId:number
}
