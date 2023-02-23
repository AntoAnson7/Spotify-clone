export const initial={
    user:null,
    // TOKEN DEBUG VALUE ONLY
    token:null,
    playlists:[],
    playing:false,
    item:null
}

export const reducer=(state,action)=>{
    console.log(action);

    switch(action.type){

        case 'SET_USER':
            return {
                ...state,user:action.user
            }
        
        case 'SET_TOKEN':
            return {
                ...state,token:action.token
            }
        
        case 'SET_PLLIST':
            return {
                ...state,playlists:action.playlists
            }

        default: return state
    }
}
// "BQADE7ptas6dcO1qRPrI1WFlSET9dSrbGD-rhxtIiA3wImOWNXTDdqWPiJZe7B-aQV5E3_gzP8LBWyI8Sk0eNNaz2w_WiraK3iXJVvBeHzAjHRzBmBKtHP-qUpFMObFbo-JDCOf-TczCqc1fOJExnBbB3pEHFfIfCxoOZJjAQs2ajv1StTImeewDMc5nNNozWaV1-RQLN1uPughNffXDmA"