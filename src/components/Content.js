import React, { useState, useEffect } from "react";
import {
    Card,
    Embed
} from "semantic-ui-react";


function Content(props) {

    return (
        <>
            <h4>Search Content</h4>
            <Card fluid style={{ boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)" }}>
                <Embed
                    // id='todHj94gGAM'
                    source='youtube'
                />
            </Card>
        </>
    );
}


export default Content;
