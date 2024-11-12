export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit":
            return state.map(item =>
                item.id === action.item.id ? { ...item, ...action.item } : item
            );

        case "delete":
            return state.filter(item => item.id !== action.id);

        case "rate":
            return state.map(item =>
                item.id === action.id 
                    ? { ...item, rating: Number.isInteger(item.rating) ? (item.rating === 10 ? 0 : item.rating + 1) : 1 }
                    : item
            );

        case "add":
            const newId = state.length > 0 ? state[state.length - 1].id + 1 : 1;  
            return [...state, { ...action.item, id: newId }];

        default:
            return state;
    }
}
