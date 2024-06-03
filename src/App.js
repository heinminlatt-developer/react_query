import React from "react";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Homepage from "./components/Home.page";
import RQSuperHerospage from "./components/RQSuperHeros.page";
import SuperHerospage from "./components/SuperHeros.page";
import RQSuperHeropage from "./components/RQSuperHero.page";
import ParalleQueryPage from "./components/ParalleQuery.page";
import { DynamicParalleQuerypage } from "./components/DynamicParalleQuery.page";
import "./App.css";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/super-heros">Super Heros</Link>
              </li>
              <li>
                <Link to="/rq-super-heros">RQ Super Heros</Link>
              </li>
            </ul>
          </nav>
          <Routes>
            <Route
              path="/rq-super-heros/:heroId"
              element={<RQSuperHeropage />}
            />
             <Route path="/rq-dynamic-parallel" element={<DynamicParalleQuerypage heroIds={[1,3]}/>} />
            <Route path="/" element={<Homepage />} />
            <Route path="/rq-parallel" element={<ParalleQueryPage/>} />
            <Route path="/rq-super-heros" element={<RQSuperHerospage />} />
            <Route path="/super-heros" element={<SuperHerospage />} />
          </Routes>
        </div>
      </Router>
      <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
    </QueryClientProvider>
  );
}

export default App;
