// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
import {useSidebar} from './SidebarContext';
import styled, {ThemeProvider} from "styled-components";
import GlobalStyles from "./GlobalStyles";

import NavComp from './Components/NavComp';
import Projects from './Components/Projects';
import About from './Components/About'

const ContentContainer = styled.div`
  position: absolute;
  transition: all 1s;
  width: ${props => props.theme.width};
  height: ${props => props.theme.height};
  left: ${props => props.theme.left};
  padding: '0';
  top: ${props => props.theme.top};
  border-left: ${props => props.theme.borderLeft};
  `

function App() {
  
  const sidebar = useSidebar()
  const theme = sidebar ? 
  {
    left:'20%',
    width:'75vw',
    height:'100vh',
    
    top:'0',
    borderLeft:'2px solid black'
  } : 

   {
    left:'100%',
    width:'0',
    height:'0',
    
    top:'0'
  };
  
  return (
        <Router basename='/my-portfolio'>
          <GlobalStyles/>
            <NavComp/>
            
            <ThemeProvider theme={theme}>
              <div style={{position:'relative'}}>
                <ContentContainer>
                  <Switch>
  
                    <Route path ='/projects'>
                      <Projects />
                    </Route>
  
                    <Route path = '/about'>
                      <About />
                    </Route>

                  </Switch>
                </ContentContainer>
              </div>
            </ThemeProvider>

        </Router>
  );
}

export default App;