export const initialState={
    user:null,
    playlist:[],
    playing: false,
    item:null,
    // token:'BQBqcVihAJwT8lrS1RPX12cgHF6vnEFq-Ebi5bVvyPnZ7TCpXpnANkuoJzRxtgOC0S96bolIkmKqJlBXmtiVDcBHTkFZ3jlbFcT2QogpjEnAug7ie9C8lxpkMKmQUqHOTn3Lp9mtWTUcDwe_-FVeOTZb_5jjKX5PSOJhOTln4g7AxXOn1MCN2uawAWFyDZB6CbrL_lZcv_Y9f4XmCfDz',
}
const reducer=(state,action)=>{
    console.log(action);
    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        };
        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;