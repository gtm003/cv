import './App.css';
import CV from './main/main';
import {connect} from 'react-redux';

function AppRedux(state) {
  //console.log(state.currentLang);
  return (
    <div className="App">
      <CV />
    </div>
  );
}

const mapStateToProps = (state) => ({
  currentLang: state.currentLang,
});

const App = connect(mapStateToProps)(AppRedux);

export default App;
