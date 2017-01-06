import React, {Component} from 'react';
import {
    Appear,
    BlockQuote,
    Cite,
    CodePane,
    Deck,
    Fill,
    Heading,
    Image,
    Layout,
    Link,
    ListItem,
    List,
    Markdown,
    Quote,
    Slide,
    Spectacle,
    Text
} from "spectacle";


export default class JsxSlide extends Component {

    render() {
        return (
            <div>
                <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">JSX</Heading>
                <Layout>
                    <Fill>
                        <List>
                            <Appear><ListItem>JSX is a subset/dialect of JavaScript</ListItem></Appear>
                            <Appear><ListItem>It allows us to write what looks like HTML inside our
                                JavaScript</ListItem></Appear>
                            <Appear><ListItem>Behind the scenes it just JavaScript. JSX gets transpiled to regular
                                JavaScript</ListItem></Appear>
                        </List>
                    </Fill>
                </Layout>
            </div>
        );
    }
}
