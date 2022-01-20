import React, { Component } from 'react';
import SideNav from "../components/SideNav";
import Header from '../components/Header';
import RowCard from "../row/row";
import api from '../api/api';



class Home extends Component {
   render() {
      return (
         <>
            <div>
               <header>
                  <Header />
               </header>
               <div className="wrapper-lb">
                  <SideNav />
                  <div className="main-panel ps-container ps-theme-default">


                     <RowCard title="Trending now" fetchUrl={api.fetchTrending} isLargeRow />
                     {/* </div>
                              </div> */}
                     <RowCard title="FlixnChill originals" fetchUrl={api.fetchNetflixOriginals} />
                     <RowCard title="Top Rated" fetchUrl={api.fetchTopRated} />

                  </div>
               </div>
            </div>
         </>
      )
   }
}

export default Home
