import React, { useContext, useState } from "react";
import { Grid, Transition, Ref, Card } from "semantic-ui-react";

import SideBar from "../components/SideBar";
import SearchResult from "../components/SearchResult";

function Home(props) {
    const contextRef = React.createRef();
    const personName = props.match.params.personName;
    console.log(personName)

    return (
        <Ref innerRef={contextRef}>
            <Grid stackable>
                <Grid.Column width={4}>
                    <SideBar contextRef={contextRef}/>
                </Grid.Column>
                <Grid.Column width={12}>
                    <SearchResult personName={personName}></SearchResult>
                </Grid.Column>
               
            </Grid>
        </Ref>
    );
}

export default Home;
