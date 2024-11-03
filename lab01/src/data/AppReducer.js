export default function AppReducer(state, action) {
    switch (action.type) {
        case "edit": {
            
            alert(`Edytowanie osoby o id: ${action.id}`);
            return state;
        }
        case "delete": {
            
            return state.filter((item) => item.id !== action.id);
        }
        case "rate": {
            
            return state.map((item) =>
                item.id === action.id
                    ? { ...item, rating: item.rating === 10 ? 0 : item.rating + 1 }
                    : item
            );
        }
        default:
            return state;
    }
}
