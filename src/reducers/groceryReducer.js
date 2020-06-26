export const groceryReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_GROCERY':
        return [...state, { 
            name: action.grocery.name,
            quantity: action.grocery.quantity,
            where: action.grocery.where,
            buyDate: action.grocery.buyDate,
            exDate: action.grocery.exDate,
            image: '',
            id: action.grocery.id
        }]
        case 'REMOVE_GROCERY':
        return state.filter(g => g.id !== action.id)
        default:
            return state
    }
}
 