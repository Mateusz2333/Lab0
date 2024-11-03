export default function AppReducer(state, action) {
    switch (action.type) {
        case 'RATE': {
            const { id } = action.payload;
            return state.map((item) =>
                item.id === id
                    ? { ...item, rating: item.rating === 10 ? 0 : item.rating + 1 }
                    : item
            );
        }
        case 'EDIT':
            
            return state;
        case 'DELETE':
            
            return state;
        default:
            return state;
    }
}
