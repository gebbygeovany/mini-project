import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
    Card,
    Sticky,
    Dropdown,
    Form,
    Radio,
    Input,
    Label,
} from "semantic-ui-react";


function FilterBarHome(props) {
    const [categoryValue, setCategoryValue] = useState("");
    const [personValue, setPersonValue] = useState("");
    const [regionValue, setRegionValue] = useState("");

    const categoryOption = [
        { key: 'musician', value: 'musician', text: 'Musician' },
        { key: 'actor', value: 'actor', text: 'Actor' },

    ]
    const categoryChange = (_, { value }) => {
        setCategoryValue(value);
    };

    const regionOptions = [
        { key: 'Indonesian', value: 'Indonesian', text: 'Indonesian' },
        { key: 'International', value: 'International', text: 'International' },
    ]
    const regionChange = (_, { value }) => {
        setRegionValue(value);
    };

    const internationalActorOptions = [
        { key: 'Tom Hiddleston', value: 'Tom Hiddleston', text: 'Tom Hiddleston' },
        { key: 'Chris Pratt', value: 'Chris Pratt', text: 'Chris Pratt' },
        { key: 'Robert Downey Jr', value: 'Robert Downey Jr', text: 'Robert Downey Jr' },
       
    ]
    const indonesianActorOptions = [
        { key: 'Dude Herlino', value: 'Dude Herlino', text: 'Dude Herlino' },
        { key: 'Herjunot Ali', value: 'Herjunot Ali', text: 'Herjunot Ali' },
        { key: 'Chicco Jerikho', value: 'Chicco Jerikho', text: 'Chicco Jerikho' },
       
    ]

    const internationalMusicianOptions = [
        { key: 'Matt Bellamy', value: 'Matt Bellamy', text: 'Matt Bellamy' },
        { key: 'Chris Martin', value: 'Chris Martin', text: 'Chris Martin' },
        { key: 'Madonna', value: 'Madonna', text: 'Madonna' },
       
    ]
    const indonesianMusicianOptions = [
        { key: 'Fiersa Besari', value: 'Fiersa Besari', text: 'Fiersa Besari' },
        { key: 'Glenn Fredly', value: 'Glenn Fredly', text: 'Glenn Fredly' },
        { key: 'Rizky Febian', value: 'Rizky Febian', text: 'Rizky Febian' },
       
    ]
    const personChange = (_, { value }) => {
        setPersonValue(value);
        window.location.href = `/home/${value}`
    };

    return (
        <>
            <Sticky context={props.contextRef} offset={100}>
                <h4>Search Person</h4>
                <Card fluid style={{ boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)" }}>
                    <Card.Content>
                        <h5>Category</h5>
                        <Dropdown
                            placeholder="Select Category"
                            fluid
                            selection
                            options={categoryOption}
                            onChange={categoryChange}
                        />
                    </Card.Content>
                    {categoryValue !== "" ? (
                        <Card.Content>
                            <h5>Region</h5>
                            <Dropdown
                                placeholder="Select Region"
                                fluid
                                selection
                                options={regionOptions}
                                onChange={regionChange}
                                value={regionValue}
                            />
                        </Card.Content>
                    ) : (<></>)}

                    {categoryValue !== "" && regionValue !== ""? (
                        categoryValue === "actor" ? (
                            <Card.Content>
                                <h5>{categoryValue === "actor" ? "Actor's Name" : "Muscisian's Name"}</h5>
                                <Dropdown
                                    placeholder="Select Person"
                                    fluid
                                    options={regionValue === "International" ? internationalActorOptions : indonesianActorOptions}
                                    search
                                    selection
                                    disabled={categoryValue === ""}
                                    onChange={personChange}
                                />
                            </Card.Content>
                        ) : (
                            <Card.Content>
                                <h5>{categoryValue === "actor" ? "Actor's Name" : "Muscisian's Name"}</h5>
                                <Dropdown
                                    placeholder="Select Person"
                                    fluid
                                    options={regionValue === "International" ? internationalMusicianOptions : indonesianMusicianOptions}
                                    search
                                    selection
                                    disabled={categoryValue === ""}
                                    onChange={personChange}
                                />
                            </Card.Content>
                        )

                    ) : (<></>)}

                </Card>
            </Sticky>
        </>
    );
}


export default FilterBarHome;
