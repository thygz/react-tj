import React from "react";
import axios from "axios";
import Navbar from "./Navbar";
import SearchBar from "./Searchbar";
import ImageList from "./ImageList";

import Welcome from "./Welcome";
import ArrayList from "./ArrayList";
import Clock from "./clock";

class App extends React.Component {
    state = { images: [] };

    onSearchSubmit = async (term) => {
        // async await     
        const response = await axios.get( 
            'https://api.unsplash.com/search/photos', 
            {
                headers: {
                    Authorization: 'Client-ID tiyMhOk9jYN0V14Vj2Ci1wflsdmiAN2J_9aZM4m2uhQ'
                },
                params: {
                    query: term,
                    per_page: 20
                }
            }
        );
        this.setState({ images: response.data.results });
        // console.log(response.data.results);
}   

//    Promise Syntax
//     axios.get( 
//         'https://api.unsplash.com/search/photos', 
//         {
//             headers: {
//                 Authorization: 'Client-ID tiyMhOk9jYN0V14Vj2Ci1wflsdmiAN2J_9aZM4m2uhQ'
//             },
//             params: {
//                 query: term
//             }
//         }
//     ).then( (response) => {
//         console.log(response.data.results);
//     } )
// }

    render() {
        return (
            <div>
                <Navbar />
                <Clock/>
                <SearchBar executeSubmit={this.onSearchSubmit} label="Picture Search" />
                <ImageList images={this.state.images} />
                {/* <ArrayList /> */}
                
                {/* <div className="container">
                    <h1>Hello World!</h1>
                    <Welcome name="Daniel Padilla" />
                   
                </div> */}
            </div>

        );
    }
}

export default App;