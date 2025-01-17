import React, {useEffect} from 'react'
import { useFetch } from 'react-async';
import {useSidebar, useSidebarUpdate} from '../../SidebarContext'
// eslint-disable-next-line
import { HashRouter as Router, Switch, Route, Redirect, NavLink} from 'react-router-dom';
// eslint-disable-next-line
import styled from 'styled-components';

import {Button} from '../../Components/ButtonComponents';
const Link = styled(NavLink)`
  text-decoration:none;`
const ButtonCont = styled.div`
    grid-area: list;
    display:grid;
    align-items:'center';
    gap: 15px 0;
    margin: 50% 0;
    width:225px;
    padding-left: 15px;
    height:60vh;

    ${Button},${Link}, * ${Button} {
        min-height:0;
        height: 100px;}

    
     ${Link}:hover ${Button}{
      background-color:${props => props.disabled ? "none": "rgba(150, 150, 150)"};
      border-radius: 15px;
      text-decoration: ${props => props.disabled ? "none": "underline"};
    }

    * .active {
      pointer-events:none;
      user-select:none;
      cursor:default;
    }

  `
const Container = styled.div`
    height:calc(100vh - 2.5rem);
    max-width: calc(100vw - 300px);
    padding-top:1rem;
    margin-right:2rem;
    display: grid; 
        grid-template-columns: 0.25fr 1fr 1fr; 
        grid-template-rows: 2fr 1fr; 
        gap: 15px 15px; 
        grid-template-areas: 
            "list iframe iframe"
            "list info1 info2"; 
`
const Description = styled.div`
font-size:1.25rem;
border-radius:15px;
padding:8px;
color:white;
font-weight:bold;
margin:0;
white-space:pre-wrap;

a{
    color: #f9f1f1;
    transition: all 0.25s;
    transform: translate(-50%, -50%);
} a:hover {

    font-size: 105%;
    transition: all 0.25s;
}

`

function ProjectList() {

    const sidebar = useSidebar()
    const toggleSidebar = useSidebarUpdate()
    useEffect(()=>{
        if(!sidebar) { toggleSidebar()}
            // eslint-disable-next-line
        },[])

    const Projects = ()=>{
        const {data, error} = useFetch(`https://tomkhcoding.github.io/api/projects/projects.json`, {
            headers: { accept: "application/json" },
          })
        if (error) return error.message
        if (data)  return (
            
            <Router basename='/prosjekt'>
                <Container>
                    <ButtonCont>
                        {data.slice(0, 5).map(data =>
                            <React.Fragment key={data.id}>
                                {data.state==='disabled' ?
                                <Button disabled key={data.id}><h1>{`${data.name}`}</h1></Button>
                                :
                                <Link key ={data.id} exact to = {`/${data.path}`}>
                                    <Button project><h1>{`${data.name}`}</h1></Button>
                                </Link>
                                }
                            </React.Fragment>)}
                    </ButtonCont>

                   <Switch>
                    {data.slice(0, 5).map(data =>
                        <Route  key= {data.id} exact path ={`/${data.path}`}>
                            
                            <iframe style={{gridArea:'iframe', border:'none', borderRadius:'15px'}} src={`${data.url}`} title={`${data.name}`} width='100%' height='100%' scrolling='no'></iframe>

                            <Description style={{gridArea:'info1'}}>
                                <p>{data.descriptionNo}</p>
                            </Description>
                            
                            <Description style={{gridArea:'info2'}}><p>Prosjektet er tilgjengelig i sin nåværende tilstand her:<br/> <br/><a href={`${data.url}`} target='_blank' rel="noreferrer">{data.url}</a></p>
                            <p>Koden til prosjektet kan finnes her: <br/><br/><a href={`${data.codeUrl}`} target='_blank' rel="noreferrer">{data.codeUrl}</a></p>
                            </Description>

                        </Route>
                    )}</Switch>
                </Container>
            </Router>
        )
        return null
        }
    
    return( <Projects />)
}

export default ProjectList