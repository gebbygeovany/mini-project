import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Card, Table, Embed, Button } from "semantic-ui-react";


function SearchResult(props) {

    const [id, setId] = useState("");

    const persons = [
        {
            name: "Tom Hiddleston",
            tittle: "Tom Hiddleston Reacts to Unreleased Footage of Him Auditioning as Thor",
            link: "BTGxm6gFdsE"
        },
        {
            name: "Tom Hiddleston",
            tittle: "Tom Hiddleston Teases Fans' Burning TVA Questions in Loki (Extended Interview) | The Tonight Show",
            link: "hs33tuU6gr8"
        },
        {
            name: "Tom Hiddleston",
            tittle: "Tom Hiddleston Speaks 11 Languages",
            link: "6rubIlTx0PY"
        },
        // 
        {
            name: "Chris Pratt",
            tittle: "Chris Pratt Answers Ellen’s ‘Burning Questions’",
            link: "Xy3tQS9Y_II"
        },
        {
            name: "Chris Pratt",
            tittle: "Chris Pratt Can’t Stop Flirting With Jennifer Lawrence",
            link: "gEi5RfGDmVc"
        },
        {
            name: "Chris Pratt",
            tittle: "Jennifer Lawrence & Chris Pratt Answer the Web's Most Searched Questions | WIRED",
            link: "Q5M4KQ1EU-I"
        },
        // 
        {
            name: "Robert Downey Jr",
            tittle: "Inside Robert Downey Jr.’s Windmill Home in the Hamptons | Open Door | Architectural Digest",
            link: "P2V0qhiof_M"
        },
        {
            name: "Robert Downey Jr",
            tittle: "TO INDONESIA FROM ROBERT DOWNEY JR.",
            link: "3QJzGpwjMeU"
        },
        {
            name: "Robert Downey Jr",
            tittle: "Emotional Interview with Robert Downey Jr.",
            link: "5WI6MHH7Y7I"
        },
        // 
        {
            name: "Dude Herlino",
            tittle: "Dude Herlino & Alyssa Soebandono Latihan Mengasuh Anak Perempuan di Sinetron Terbarunya | HSN",
            link: "rWYXJWQGfHg"
        },
        {
            name: "Dude Herlino",
            tittle: "‪Dude Harlino feat. Asmirandah - Bunga-Bunga Cinta (Ost Dalam Mihrab Cinta).flv",
            link: "NWugNVaEwiE"
        },
        {
            name: "Dude Herlino",
            tittle: "Resepsi Pernikahan Dude Herlino dan Alyssa Berlangsung Megah - Intens",
            link: "vMaRtSCdZOs"
        },
        // 
        {
            name: "Herjunot Ali",
            tittle: "WHAT!? Herjunot Ali Mau Jomblo Seumur Hidup!? - Daniel Tetangga Kamu",
            link: "xcRY-EiJTJ8"
        },
        {
            name: "Herjunot Ali",
            tittle: "NYAMAN SAMA GADING ANDHIKA, HERJUNOT ALI BIKIN PECAH KOSAN UUS!",
            link: "toWK-N7TZ6M"
        },
        {
            name: "Herjunot Ali",
            tittle: "PIKIRAN DAN HATI JUNOT YANG BRILIAN! USSY MELONGO!",
            link: "pZq7ECSuGdM"
        },
        // 
        {
            name: "Chicco Jerikho",
            tittle: "[FULL] Lebih Dekat Dengan Chicco Jerikho | OKAY BOS (29/07/20)",
            link: "Ogl7Td0QU6A"
        },
        {
            name: "Chicco Jerikho",
            tittle: "Chicco Jerikho Ditantang Pull Up Oleh Deddy Corbuzier",
            link: "MYQBpyTPumQ"
        },
        {
            name: "Chicco Jerikho",
            tittle: "Axelerate The Documentary: Chicco Jerikho",
            link: "k3LgAxZLiPM"
        },
        // 
        {
            name: "Matt Bellamy",
            tittle: "Matt Bellamy Playing the Piano (Explorers)",
            link: "7jn5qALbUb4"
        },
        {
            name: "Matt Bellamy",
            tittle: "Matt Bellamy - Bridge Over Troubled Water [Official Audio]",
            link: "XNGtzfRdTtU"
        },
        {
            name: "Matt Bellamy",
            tittle: "Matt Bellamy - Behold, The Glove (Cover) [Shortened]",
            link: "stLaOuP8c40"
        },
        // 
        {
            name: "Chris Martin",
            tittle: "Chris Martin and Ariana Grande - Don't Look Back In Anger",
            link: "y_KCK-pHzqk"
        },
        {
            name: "Chris Martin",
            tittle: "Chris Martin Carpool Karaoke",
            link: "SADub7W22Z"
        },
        {
            name: "Chris Martin",
            tittle: "Chris Martin “Viva la Vida” (Acoustic) on the Howard Stern Show (2016)",
            link: "vUnWFsc5WBU"
        },
        // 
        {
            name: "Madonna",
            tittle: "Madonna - La Isla Bonita (Official Video)",
            link: "zpzdgmqIHOQ"
        },
        {
            name: "Madonna",
            tittle: "Madonna - Like A Prayer (Official Video)",
            link: "79fzeNUqQbQ"
        },
        {
            name: "Madonna",
            tittle: "Madonna - Living For Love (Live at the 2015 Grammy Awards)",
            link: "InXkFmD9Zhw"
        },
        // 
        {
            name: "Fiersa Besari",
            tittle: "Kamera untuk Mendaki dan Editnya Pakai Apa?",
            link: "BdpDMqjiCWo"
        },
        {
            name: "Fiersa Besari",
            tittle: "Kenapa Pendaki Pada Gondrong?",
            link: "jxaLnaEnnmo"
        },
        {
            name: "Fiersa Besari",
            tittle: "EPS. 16 BARU KENAL WITH VIBE - FIERSA BESARI ",
            link: "AI6lPc-mU_w&"
        },
        // 
        {
            name: "Glenn Fredly",
            tittle: "Mengenang lagu-lagu Glenn fredly",
            link: "gqzFzBZhhyM"
        },
        {
            name: "Glenn Fredly",
            tittle: "[TANPA IKLAN] Glenn Fredly Full Album - Glenn Fredly MP3 - Best of Glenn Fredly",
            link: "_w_0Ow0Uh6E"
        },
        {
            name: "Glenn Fredly",
            tittle: "Glenn Fredly-Sedih Tak Berujung/Akhir Cerita Cinta",
            link: "0TKtL00ECto"
        },
        // 
        {
            name: "Rizky Febian",
            tittle: "Rizky Febian Full Album Terbaru Terpopuler 2020 - Makna Cinta ll Penyemangat Kerja",
            link: "j7Nvnfs3kcA"
        },
        {
            name: "Rizky Febian",
            tittle: "#DiBalikKarya Permbuatan Music VIdeo Terlukis Indah",
            link: "sWyaVglyJrk"
        },
        {
            name: "Rizky Febian",
            tittle: "Rizky Febian & Ziva Magnolya - Terlukis Indah (Official Music Video)",
            link: "i90EvEZ3axw"
        },
    ]

    const resultLists = persons.filter((person) => person.name === props.personName);

    console.log(resultLists.length)
    console.log(props.personName)


    return (
        <>
            <h4>Search Result {props.personName === " " ? "" : "for " + props.personName}</h4>
            <Card fluid style={{ boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)" }}>
                <Table striped fluid >
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Title</Table.HeaderCell>
                            <Table.HeaderCell></Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {resultLists.length == 0 ? (
                            <Table.Row>
                                <Table.Cell>No Results Found</Table.Cell>
                                <Table.Cell>
                                </Table.Cell>
                            </Table.Row>
                        ) : (
                            resultLists.map((result) => (
                                <Table.Row>
                                    <Table.Cell>{result.tittle}</Table.Cell>
                                    <Table.Cell>
                                        <Button floated="right" icon='play' content='Play Video' onClick={() => setId(result.link)} />
                                    </Table.Cell>
                                </Table.Row>
                            ))
                        )}

                    </Table.Body>
                </Table>
            </Card>
            <h4>Search Content</h4>
            <Card fluid style={{ boxShadow: "0px 3px 5px rgba(0, 0, 0, 0.2)" }}>
                <Embed
                    id={id === "" ? "5RNkQaDcRAc" : id}
                    source='youtube'
                />
            </Card>
        </>
    );
}


export default SearchResult;
