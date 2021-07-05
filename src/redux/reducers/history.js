const history = (state={moneytreehistory:[] , colorwinhistory:[], ladderhistory:[] , andarbaharhistory:[]} , action)=>{
    switch(action.type){
            case "MONEYTREEHISTORY":
                localStorage.setItem('moneytree history' , JSON.stringify({
                     moneytreehistory:[...state.moneytreehistory,action.payload]})) ; 
            return {
             moneytreehistory:[...state.moneytreehistory,action.payload]
             };
             case "COLORWINHISTORY":
                localStorage.setItem('colorwin history' , JSON.stringify({ colorwinhistory:[...state.colorwinhistory,action.payload]})) ; 
            return {
                colorwinhistory:[...state.colorwinhistory,action.payload]
                 };
            case "LADDERHISTORY":
               
            return {
            ladderhistory:[...state.ladderhistory,action.payload]
             };     
             case "ANDARBAHARHISTORY":
            return {
            andarbaharhistory:[...state.andarbaharhistory,action.payload]
             };
            default:
                return state

    }
}  

export default history ; 
