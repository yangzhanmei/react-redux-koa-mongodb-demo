import request from 'superagent';

export default store => next => action => {
    if (action.type === 'TEST') {
        request.get('/getTest')
            .end((err, res) => {
                next({ type: action.type, data: res.body.data || '' });
            });
    }
    else
        next(action);
};