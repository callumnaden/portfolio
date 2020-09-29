import React from 'react';
import './App.css';
import Home from './pages/HomePage';
import About from './pages/AboutPage';
import LatestWork from './pages/LatestWorkPage';
import CaseStudies from './pages/CaseStudiesPage';
import Archive from './pages/ArchivePage';
import LesMills from './pages/LesMills';
import FlamingBonnet from './pages/FlamingBonnet';
import BronzeFalls from './pages/BronzeFalls';
import HushHeath from './pages/HushHeath';
import { Switch, Route, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';



const ParentVarients = {
  start: {
      scale: 1,
      opacity: 0,
  },
  end: {
      scale: 1,
      opacity: 1,
      transition: {
          type: 'spring',
          delay: 0.4,
          staggerChildren: 0.3,
      }
  }
}

const ChildVarients = {
  start: {
      opacity: 0,
      y: '-20px'
  },
  end: {
      opacity: 1,
      y: '0px'
  }
}



function App() {

const [darkMode, setDarkMode] = React.useState(getInitialMode());
React.useEffect(() => {
  localStorage.setItem('dark', JSON.stringify(darkMode));
}, [darkMode]);

function getInitialMode() {
  const isReturningUser = "dark" in localStorage;
  const savedMode = JSON.parse(localStorage.getItem('dark'));
  const userPrefersDark = getPrefColorScheme();

  if (isReturningUser) {
    return savedMode;
  } else if (userPrefersDark) {
    return true;
  } else {
    return false;
  }
}

function getPrefColorScheme() {
  if(!window.matchMedia) return;
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}




  return (
    <motion.div className={darkMode ? "dark-mode" : "light-mode"}
    variants={ParentVarients}
                    initial="start"
                    animate="end">
      <div className="header">
          <motion.div className="logo"
          variants={ChildVarients}>
              <h1>Callum Naden</h1>
          </motion.div>
          <motion.div className="light"
          variants={ChildVarients}>
                <div className="light-link" onClick={() => setDarkMode(prevMode => !prevMode)} >
               

                  {darkMode ? <svg className="light-img" width="39" height="46" viewBox="0 0 39 46" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.734c0 4.164-3.75 6.98-3.75 10.266h-6.5c0-3.286-3.75-6.103-3.75-10.266 0-4.343 3.498-6.734 6.996-6.734 3.502 0 7.004 2.394 7.004 6.734zm-4.5 11.266h-5c-.276 0-.5.224-.5.5s.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-5c-.276 0-.5.224-.5.5s.224.5.5.5h5c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-5.5l1.451 1.659c.19.216.465.341.753.341h1.093c.288 0 .562-.125.752-.341l1.451-1.659z"/></svg> : <svg className="light-img" width="39" height="46" viewBox="0 0 39 46" fill="none" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 19h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm0 2h-4c-.276 0-.5.224-.5.5s.224.5.5.5h4c.276 0 .5-.224.5-.5s-.224-.5-.5-.5zm.25 2h-4.5l1.188.782c.154.138.38.218.615.218h.895c.234 0 .461-.08.615-.218l1.187-.782zm3.75-13.799c0 3.569-3.214 5.983-3.214 8.799h-5.572c0-2.816-3.214-5.23-3.214-8.799 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.051 6.003 5.772zm4-.691v1.372h-2.538c.02-.223.038-.448.038-.681 0-.237-.017-.464-.035-.69h2.535zm-10.648-6.553v-1.957h1.371v1.964c-.242-.022-.484-.035-.726-.035-.215 0-.43.01-.645.028zm-3.743 1.294l-1.04-1.94 1.208-.648 1.037 1.933c-.418.181-.822.401-1.205.655zm10.586 1.735l1.942-1.394.799 1.115-2.054 1.473c-.191-.43-.423-.827-.687-1.194zm-3.01-2.389l1.038-1.934 1.208.648-1.041 1.941c-.382-.254-.786-.473-1.205-.655zm-10.068 3.583l-2.054-1.472.799-1.115 1.942 1.393c-.264.366-.495.763-.687 1.194zm13.707 6.223l2.354.954-.514 1.271-2.425-.982c.21-.397.408-.812.585-1.243zm-13.108 1.155l-2.356 1.06-.562-1.251 2.34-1.052c.173.433.371.845.578 1.243zm-1.178-3.676h-2.538v-1.372h2.535c-.018.226-.035.454-.035.691 0 .233.018.458.038.681z"/></svg> 
                      
                }
                    
                </div>
            </motion.div>
        </div>

        <motion.div className="nav"
        variants={ChildVarients}>
                <h2><NavLink to="/about" className="nav-link" activeClassName={darkMode ? "nav-active-dark" : "nav-active"} >ABOUT.</NavLink><br/> <NavLink to="/latest-work" className="nav-link" activeClassName={darkMode ? "nav-active-dark" : "nav-active"}  >LATEST WORK.</NavLink><br/> <NavLink to="/archive" className="nav-link" activeClassName={darkMode ? "nav-active-dark" : "nav-active"}  >ARCHIVE.</NavLink></h2>
            </motion.div>
            <AnimatePresence>
              <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/about" component={About} />
                <Route path="/latest-work" exact component={LatestWork} />
                <Route path="/case-studies" component={CaseStudies} />
                <Route path="/archive" component={Archive} />
                <Route path="/latest-work/les-mills" component={LesMills} />
                <Route path="/latest-work/flaming-bonnet" component={FlamingBonnet} />
                <Route path="/latest-work/bronze-falls" component={BronzeFalls} />
                <Route path="/latest-work/hush-heath" component={HushHeath} />
              </Switch>
           </AnimatePresence>
   

          

            
              <div className="footer">
                <motion.div className="mail-me"
                variants={ChildVarients}>
                        <a className="mail-me-link" href="mailto:callumnadendesign@gmail.com">
                            <svg className="mail-img" width="42" height="34" viewBox="0 0 42 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0 0V33.6H42V0H0ZM11.5903 14.8008L3.5 25.4632V7.80827L11.5903 14.8008ZM4.3435 3.73333H37.6548L21 18.1309L4.3435 3.73333ZM14.308 17.1509L21 22.9357L27.7025 17.1416L37.5235 29.8667H4.66025L14.308 17.1509ZM30.422 14.7915L38.5 7.80827V25.2579L30.422 14.7915Z"/>
                            </svg>say hello
                        </a>
                    </motion.div>
                    <motion.div
                variants={ChildVarients}>
                    <p className="footer-text">You can also find me on
                        <br/>
                        <a href="www.linkedin.com/in/callumnaden" className="social">Linked-In</a> and <a href="https://www.facebook.com/callum.naden.56/" className="social">Facebook</a>.
                    </p>
                </motion.div>
          </div>
    </motion.div>
  );
}

export default App;
