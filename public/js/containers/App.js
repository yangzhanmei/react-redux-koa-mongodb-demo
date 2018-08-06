import { connect } from 'react-redux';
import App from '../components/App';

function mapStateToProps(state) {

    return {
        data: state.test.data
    };
}

function mapDispatchToProps(dispatch) {
    return {
        showTest: () => dispatch({ type: 'TEST' })
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);