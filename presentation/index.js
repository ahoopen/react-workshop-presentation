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
    TableHeaderItem, TableItem, TableRow, Table,
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
    jsx: require("../assets/jsx-bg.png"),
    fightclub: require("../assets/fightclub.svg")
};

preloader(images);

const theme = createTheme({
    primary: "#039BE5",
    secondary: "#333"
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
                    <Slide transition={["slide"]}>
                        <Heading size={2} textAlign="left" caps textColor="#fff">Todays agenda</Heading>
                        <Layout style={{alignItems: "center", margin: "40px -80px", justifyContent: "space-between"}}>
                            <Fill>
                                <List>
                                    <Appear><ListItem textColor="#fff">Declarative</ListItem></Appear>
                                    <Appear><ListItem textColor="#fff">Virtual DOM</ListItem></Appear>
                                    <Appear><ListItem textColor="#fff">One way data flow</ListItem></Appear>
                                    <Appear><ListItem textColor="#fff">One way data flow</ListItem></Appear>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    {/*FIRST REACTION*/}
                    <Slide transition={["spin", "zoom"]} bgColor="#f1f1f1" textColor="primary">
                        <Heading size={2} textColor="#333">Reaction to React</Heading>

                        <CodePane
                            lang="jsx"
                            textSize=".5em"
                            source={require("raw-loader!../assets/react/react.first.example")}
                            margin="20px auto"
                        />

                        <Appear style={{padding: "6px"}}>
                            <Text lineHeight={1.2} textColor="#333">Ugly</Text>
                        </Appear>
                        <Appear style={{padding: "6px"}}>
                            <Text lineHeight={1.2} textColor="#333">Separation of concerns</Text>
                        </Appear>
                        <Appear style={{padding: "6px"}}>
                            <Text lineHeight={1.2} textColor="#333">React is a templating language</Text>
                        </Appear>

                    </Slide>

                    <Slide transition={["spin", "zoom"]} bgColor="#f1f1f1" textColor="secondary">
                        <Heading size={2} textColor="#333">Reaction to React #2</Heading>

                        <Markdown textSize="2em">
                            {`
  * ~~Ugly~~ Dont **worry** about it
  * ~~Separation of concerns~~ **JSX**
  * ~~React is a templating language~~ Its actually **JavaScript**
            `}
                        </Markdown>
                    </Slide>


                    {/*JSX*/}

                    <Slide textColor="primary"
                           notes="Lijkt op HTML. Maar we kunnen geen HTML schrijven in JS. Wat is er aan de hand? de 'HTM' is JSX"
                           L>
                        <Text textSize="2.6em" textColor="#FFF" margin="20px 0px 0px">
                            JSX <Text textColor="#FFF" textSize="1.6em" bold>What is it</Text>
                        </Text>
                        <Layout style={{alignItems: "center", margin: "40px -80px", justifyContent: "space-between"}}>
                            <Fill>
                                <List>
                                    <Appear>
                                        <ListItem textColor="#FFF">JSX is a subset/dialect of JavaScript</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem textColor="#FFF">It allows us to write what looks like HTML inside our
                                            JavaScript</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem textColor="#FFF">Behind the scenes it just JavaScript. It transpiles
                                            to regular
                                            JavaScript</ListItem>
                                    </Appear>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".8em"
                        code={require("raw!../assets/jsx/jsx.compiled.example")}
                        ranges={[
                            {loc: [0, 4], title: "React component"},
                            {loc: [1, 2], title: "JSX"},
                            {loc: [5, 13], note: "How it looks in the browser"},
                            {loc: [6, 11], note: "JSX elements are virtual dom instances"}
                        ]}/>


                    <Slide transition={["spin"]} bgColor="#f1f1f1" textColor="primary">
                        <Heading style={{textAlign: "center"}} size={2} textAlign="left" caps textColor="#333" textFont="primary">JSX</Heading>
                        <Layout style={{alignItems: "center", margin: "40px -80px", justifyContent: "space-between"}}>
                            <Fill>
                                <Text textAlign="left" lineHeight={1.2} textColor="#333">JSX elements are treated as
                                    JavaScript
                                    expressions. They can be used anywhere. That means
                                    that a JSX element can:</Text>
                                <List>
                                    <Appear>
                                        <ListItem textColor="#333" textSize="1.1em">Be saved in a variable</ListItem>
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
                                        <ListItem textColor="#333" textSize="1.1em">Stored in a object or
                                            array</ListItem>
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
                                        <ListItem textColor="#333" textSize="1.1em">Passed into a function</ListItem>
                                    </Appear>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide>
                        <Heading>Attributes in JSX</Heading>
                        <Text></Text>
                    </Slide>

                    <Slide>
                        <Heading>JSX Components</Heading>
                        <Text>Must be capitalized</Text>
                        <Text>{`When a JSX component start with a lowercase letter, it refers to the react build-in
                            component like <div> or <span> and results into a string ‘div’ or ‘span’ passed to React.createElement.
                            Components that start with a capital letter like <Image /> compile to React.createElement(Image)`}</Text>
                    </Slide>

                    {/*React component*/}
                    <Slide  bgImage={images.fightclub.replace("/", "")}>
                        <Text textSize="2.6em" textColor="#FFF" margin="20px 0px 0px">
                            #1 rule of <Text textColor="#FFF" textSize="1.6em" bold>React</Text>
                        </Text>
                        <Appear style={{margin: "40px -80px"}}>
                            <Text textSize="2.6em" textColor="#FFF">Everything is a
                                <Text textColor="#FFF" textSize="1.6em" bold>{'<Component />'}</Text>
                            </Text>
                        </Appear>
                    </Slide>

                    {/*REACT has no*/}
                    <Slide transition={["fade"]} bgColor="#f1f1f1" textColor="primary">
                        <Heading size={2} textColor="#333">React has no</Heading>
                        <div style={{margin: "40px -80px"}}>
                            <Appear style={{width: "300px", padding: "6px"}}>
                                <Text lineHeight={1.2} bgColor="#fff" textColor="#333">Controllers</Text>
                            </Appear>
                            <Appear style={{width: "260px", padding: "6px"}}>
                                <Text lineHeight={1.2} bgColor="#fff" textColor="#333">Templates</Text>
                            </Appear>
                            <Appear style={{width: "400px", padding: "6px"}}>
                                <Text lineHeight={1.2} bgColor="#fff" textColor="#333">Global event listeners</Text>
                            </Appear>
                            <Appear style={{width: "200px", padding: "6px"}}>
                                <Text lineHeight={1.2} bgColor="#fff" textColor="#333">Models</Text>
                            </Appear>
                        </div>
                        <Appear>
                            <Text textSize="2.4em" textColor="#333">Just <Text textSize="1em"
                                                                               bold>{'<Components />'}</Text></Text>
                        </Appear>
                    </Slide>

                    {/*React*/}
                    <Slide transition={["slide"]} bgColor="#f1f1f1" textColor="primary">
                        <Heading size={2} textColor="#333">Components</Heading>
                        <Text lineHeight={1.2} textColor="#333">What are they?</Text>
                        <List style={{margin: "40px -80px"}}>
                            <Appear>
                                <ListItem lineHeight={1.2} textColor="#333">React Components are really just functions
                                    that take attributes</ListItem>
                            </Appear>
                            <Appear style={{width: "260px", padding: "6px"}}>
                                <Text lineHeight={1.2} bgColor="#fff" textColor="#333">Templates</Text>
                            </Appear>
                            <Appear style={{width: "400px", padding: "6px"}}>
                                <Text lineHeight={1.2} bgColor="#fff" textColor="#333">Global event listeners</Text>
                            </Appear>
                            <Appear style={{width: "200px", padding: "6px"}}>
                                <Text lineHeight={1.2} bgColor="#fff" textColor="#333">Models</Text>
                            </Appear>
                        </List>
                        <Appear>
                            <Text textSize="2.4em" textColor="#333">Just <Text textSize="1em"
                                                                               bold>{'<Components />'}</Text></Text>
                        </Appear>
                    </Slide>

                    <Slide transition={["spin"]}>
                        <Heading textColor="#fff" size={2}>Props & State</Heading>

                    </Slide>

                    <Slide>
                        <Heading>Props</Heading>
                        <Text textAlign="left">Props are meant as static value. Not ment to be change by the component</Text>
                        <Text textAlign="left">We can pass data into our components by using props</Text>
                        <Appear>
                            <CodePane
                                lang="jsx"
                                textSize=".6em"
                                source={require("raw-loader!../assets/props/props.use.example")}
                                margin="20px auto"
                            />
                        </Appear>
                        <Appear>
                            <Text textAlign="left">We can access props by using this.props and then the name of the prop.</Text>
                        </Appear>
                        <Appear>
                            <CodePane
                                lang="jsx"
                                textSize=".6em"
                                source={require("raw-loader!../assets/props/props.access.example")}
                                margin="20px auto"
                            />
                        </Appear>
                    </Slide>

                    <Slide>
                        <Heading>Props</Heading>
                        <Text textAlign="left">We can define the properties we are looking for in our component</Text>
                        <Appear>
                            <CodePane
                                lang="jsx"
                                textSize=".6em"
                                source={require("raw-loader!../assets/props/props.prop-types.example")}
                                margin="20px auto"
                            />
                        </Appear>
                    </Slide>


                    <Slide>
                        <Heading>Props</Heading>
                        <Text textAlign="left">We can set a series of default props</Text>
                        <Appear>
                            <CodePane
                                lang="jsx"
                                textSize=".6em"
                                source={require("raw-loader!../assets/props/props.default.example")}
                                margin="20px auto"
                            />
                        </Appear>
                    </Slide>


                    <Slide transition={["spin"]} bgColor="#f1f1f1">
                        <Heading textColor="#333" size={2}>State</Heading>
                        <List>
                            <Appear><ListItem textColor="#333">State is een plain JavaScript object.</ListItem></Appear>
                            <Appear><ListItem textColor="#333">Before using state, you have initialize it</ListItem></Appear>
                            <Appear>
                                <CodePane
                                    lang="jsx"
                                    textSize=".6em"
                                    source={require("raw-loader!../assets/state/state.init.example")}
                                    margin="20px auto"
                                />
                            </Appear>
                            <Appear><ListItem textColor="#333">Each instance of a component has its own copy of state.</ListItem></Appear>
                            <Appear><ListItem textColor="#333">If state changes it re-renders the component.</ListItem></Appear>
                            <Appear><ListItem textColor="#333">Component children will also re-render.
                            </ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1" textColor="primary">
                        <Heading textColor="#333" style={{ margin: '40px 0'}}>Props VS State</Heading>
                        <Table>
                            <thead>
                            <TableRow>
                                <TableHeaderItem  style={{padding: '10px 0'}} bgColor="#fff" textColor="#333">Props</TableHeaderItem>
                                <TableHeaderItem  style={{padding: '10px 0'}} bgColor="#fff" textColor="#333">State</TableHeaderItem>
                            </TableRow>
                            </thead>
                            <tbody style={{margin: '40px 0'}}>
                            <TableRow>
                                <TableItem style={{padding: '10px 0'}} textSize="1.2em" textColor="#333">Passed in from the parent</TableItem>
                                <TableItem textColor="#333" textSize="1.2em" >Created within Component</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem style={{padding: '10px 0'}} textSize="1.2em" textColor="#333">{`<App message="hello world" />`}</TableItem>
                                <TableItem textColor="#333" textSize="1.2em">Set initial state</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem style={{padding: '10px 0'}} textSize="1.2em" textColor="#333">this.props is read-only within</TableItem>
                                <TableItem textColor="#333" textSize="1.2em">this.state to read</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem style={{padding: '10px 0'}} textSize="1.2em" textColor="#333">Can be defaulted and validated</TableItem>
                                <TableItem textColor="#333" textSize="1.2em">this.setState() to update</TableItem>
                            </TableRow>
                            </tbody>
                        </Table>
                    </Slide>

                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".8em"
                        code={require("raw!../assets/props/props.example")}
                        ranges={[
                            {loc: [0, 14]},
                            {loc: [0, 4], title: "React component"},
                            {loc: [1, 2], title: "JSX"},
                            {loc: [5, 13], note: "How it looks in the browser"},
                            {loc: [6, 11], note: "JSX elements are virtual dom instances"}
                        ]}/>

                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/props/props.parent.example")}
                        ranges={[
                            {loc: [0, 14], title: 'Component'},
                            {loc: [2, 3], note: "Click handler"},
                            {loc: [5, 6], note: "Parent method passed via props"},
                            {loc: [6, 11], note: "JSX elements are virtual dom instances"}
                        ]}/>
                </Deck>
            </Spectacle>
    );
    }
    }
