export default function (state = { data: '' }, action) {
    if (action.type === 'TEST') {

        return { data: action.data };
    }
    return state;
}