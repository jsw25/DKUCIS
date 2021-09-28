import React from 'react';
import {BrowserRouter, Route, Switch, } from 'react-router-dom'
import {
  RecoilRoot,
  atom,
  selector,
  useRecoilState,
  useRecoilValue,
} from 'recoil';
import './App.css';
import StyledComponentEx from './components/StyledComponentEx';
import { ButtonToolbar, Button } from 'react-bootstrap';
import BootstrapEx from './components/BootstrapEx'; 
import MenuBar from './components/MenuBar';

function App() {
  return (
    <RecoilRoot>
      <BootstrapEx/>
      <MenuBar/>
    </RecoilRoot>
    
  );
}

export default App;

/*
<ErrorBoundary FallbackComponent = {StyledComponentEx}>
  <BrowserRouter>
        <Switch>
          <Route/>
        </Switch>
  </BrowserRouter>
</ErrorBoundary>

설명
    <RecoilRoot>
      <CharacterCounter />
    </RecoilRoot>
*/