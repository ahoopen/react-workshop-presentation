// Import React
import React, {Component} from "react";

// https://jsfiddle.net/69z2wepo/45085/
// Import Spectacle Core tags
import {
    Appear,
    BlockQuote,
    Cite,
    Code,
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
import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
    reactLogo: require("../assets/reactjs-logo.png"),
    jsx: require("../assets/jsx-bg.png")
};

preloader(images);

const theme = createTheme({
    primary: "#039BE5",
    secondary: "#607D8B"
});

export default class Presentation extends Component {
    render() {
        return (
            <Spectacle theme={theme}>
                <Deck transition={["zoom", "slide"]} transitionDuration={500}>

                    {/* INTRO SLIDE */}
                    <Slide transition={["zoom"]} bgColor="#333">
                        <Layout style={{alignItems: "center"}}>
                            <Fill>
                                <Heading size={1} caps lineHeight={1} textColor="#FFF">React workshop</Heading>
                            </Fill>
                            <Fill>
                                <Image src={images.reactLogo.replace("/", "")} margin="0px auto 40px" height="293px"/>
                            </Fill>
                        </Layout>
                        <Text textSize="1.2em" textAlign="left" textColor="#FFF" margin="20px 0px 0px" bold>Auke ten
                            Hoopen</Text>
                    </Slide>

                    {/* TODAYS AGENDA */}
                    <Slide transition={["slide"]} bgColor="#333">
                        <Heading size={2} textAlign="left" caps textColor="#FFF" textFont="#FFF">Todays agenda</Heading>
                        <Layout style={{alignItems: "center", margin: "40px -80px", justifyContent: "space-between"}}>
                            <Fill>
                                <List>
                                    <Appear><ListItem>Declarative</ListItem></Appear>
                                    <Appear><ListItem>Virtual DOM</ListItem></Appear>
                                    <Appear><ListItem>One way data flow</ListItem></Appear>
                                    <Appear><ListItem>One way data flow</ListItem></Appear>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    {/*JSX*/}


                    <Slide transition={["slide"]} bgColor="#333" bgImage={images.jsx.replace("/", "")} bgDarken={0.75}>
                        <Heading size={2} textColor="#FFF" lineHeight={1}>What is JSX</Heading>
                        <Layout style={{alignItems: "center", margin: "40px -80px", justifyContent: "space-between"}}>
                            <Fill>
                                <List>
                                    <Appear>
                                        <ListItem>JSX is a subset/dialect of JavaScript</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem>It allows us to write what looks like HTML inside our JavaScript</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem>Behind the scenes it just JavaScript. it transpiles to regular JavaScript</ListItem>
                                    </Appear>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>


                    <Slide transition={["spin"]} bgColor="#333" textColor="primary">
                        <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">JSX</Heading>
                        <Layout style={{alignItems: "center", margin: "40px -80px", justifyContent: "space-between"}}>
                            <Fill>
                                <Text textAlign="left" lineHeight={1.2} textColor="#FFF">JSX elements are treated as JavaScript
                                    expressions. They can be used anywhere. That means
                                    that a JSX element can:</Text>
                                <List>
                                    <Appear>
                                        <ListItem textSize="1.1em">Be saved in a variable</ListItem>
                                    </Appear>
                                    <Appear>
                                        <CodePane
                                            lang="jsx"
                                            textSize=".6em"
                                            source={require("raw-loader!../assets/jsx/jsx.variable.example")}
                                            margin="20px auto"
                                        />
                                    </Appear>
                                    <Appear>
                                        <ListItem textSize="1.1em">Stored in a object or array</ListItem>
                                    </Appear>
                                    <Appear>
                                        <CodePane
                                            lang="jsx"
                                            textSize=".6em"
                                            source={require("raw-loader!../assets/jsx/jsx.object.example")}
                                            margin="20px auto"
                                        />
                                    </Appear>
                                    <Appear>
                                        <ListItem textSize="1.1em">Passed into a function</ListItem>
                                    </Appear>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>


                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize="1em"
                        code={require("raw!../assets/jsx/jsx.compiled.example")}
                        ranges={[
                            {loc: [0, 4], title: "Component"},
                            {loc: [1, 2], title: "JSX"},
                            {loc: [5, 13], note: "How it looks in the browser"},
                            {loc: [6, 11], note: "JSX elements are virtual dom instances"}
                        ]}/>


                    <Slide transition={["fade"]} bgColor="#333" textColor="primary">
                        <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">Benefits</Heading>
                        <List>
                            <Appear><ListItem>JSX</ListItem></Appear>
                            <Appear><ListItem>Server side rendering</ListItem></Appear>
                            <Appear><ListItem>Hot Reload</ListItem></Appear>
                            <Appear><ListItem>Devtools</ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide transition={["spin"]} bgColor="#333" textColor="primary">
                        <Heading size={3} textAlign="left" caps textColor="#FFF" textFont="primary">Devtools</Heading>

                    </Slide>

                    <Slide transition={["zoom"]} bgColor="#f1f1f1">
                        <Layout style={{alignItems: "center"}}>
                            <Fill>
                                <Heading size={1} caps lineHeight={1} textColor="#333">React Native</Heading>
                            </Fill>
                            <Fill>
                                dsdsadsad
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide transition={["fade"]} bgColor="#f1f1f1" textColor="primary">
                        <Heading size={2} caps lineHeight={1} textColor="#333">React Native</Heading>
                        <Layout style={{alignItems: "center", margin: "40px -80px", justifyContent: "space-between"}}>
                            <Fill>
                                <List>
                                    <Appear><ListItem>Free, open source</ListItem></Appear>
                                    <Appear><ListItem>Flexbox layout</ListItem></Appear>
                                    <Appear><ListItem>Same skill-set, similar APIs</ListItem></Appear>
                                    <Appear><ListItem>Share common code - (87%*)</ListItem></Appear>
                                    <Appear><ListItem>Native UI Components</ListItem></Appear>
                                    <Appear><ListItem>OTA Updates</ListItem></Appear>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide transition={["spin"]}>
                        <Heading size={2}>Props & State</Heading>

                    </Slide>

                    <Slide transition={["spin"]} bgColor="#f1f1f1" textColor="primary">
                        <Text textColor="#333" textSize="2.2em">Hot Reloading</Text>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#333">
                        <BlockQuote>
                            <Quote textColor="#FFF">"Learn once write anywhere."</Quote>
                        </BlockQuote>
                    </Slide>

                </Deck>
            </Spectacle>
        );
    }
}
