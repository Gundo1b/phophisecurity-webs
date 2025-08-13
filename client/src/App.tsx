import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/HomePage";
import Services from "./pages/Services";
import Register from "./pages/Register";
import WhyChooseUs from "./pages/WhyChooseUs";
import WhoCanJoin from "./pages/WhoCanJoin";
import Contact from "./pages/Contact";
import About from "./pages/About";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './index.css';
import Loading from './components/Loading';
import { useState, useEffect } from 'react';

function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return null;
}

function Router() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    console.log("Location changed:", location);
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
      console.log("Loading set to false");
    }, 1000);

    return () => {
      clearTimeout(timer);
      console.log("Timer cleared");
    };
  }, [location[0]]);

  if (loading) {
    console.log("Rendering Loading component");
    return <Loading />;
  }

  console.log("Rendering page content");

  return (
    <>
      <ScrollToTop />
      <TransitionGroup>
        <CSSTransition key={location[0]} classNames="fade" timeout={300}>
          <>
            <Switch>
              {/* Define Routes using `Route` from wouter */}
              <Route path="/" component={HomePage} />
              <Route path="/services" component={Services} />
              <Route path="/register" component={Register} />
              <Route path="/WhyChooseUs" component={WhyChooseUs} />
              <Route path="/WhoCanJoin" component={WhoCanJoin} />
              <Route path="/Contact" component={Contact} />
              <Route path="/About" component={About} />
            </Switch>
          </>
        </CSSTransition>
      </TransitionGroup>
    </>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
