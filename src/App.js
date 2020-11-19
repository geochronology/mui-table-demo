// YT: https://www.youtube.com/watch?v=jnQ1-XW7KNY
// GH: https://github.com/CodAffection/Material-UI-Component-Theme/tree/master/src
import { CssBaseline, makeStyles } from '@material-ui/core';
import './App.css';
import Header from './components/Header';
import SideMenu from './components/SideMenu';

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {

  const classes = useStyles()

  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
        <Header />
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
