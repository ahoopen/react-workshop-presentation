// Import React
import React, {Component} from "react";

// https://jsfiddle.net/69z2wepo/45085/
// Import Spectacle Core tags
import {
    Appear,
    Spectacle,
    BlockQuote,
    Cite,
    Code,
    CodePane,
    Deck,
    Fit,
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
    fightclub: require("../assets/fightclub.svg"),
    waitwhat: require("../assets/wait-what.gif"),
    componentLifecycle: require("../assets/component-lifecycle.png"),
    lifecycleMount: require("../assets/mounting-show.png"),
    lifecycleUpdate: require("../assets/update-show.png"),
    lifecycleUnmount: require("../assets/unmounting-show.png"),
    lifecycleState: require("../assets/lifecycle-state.png"),
    lifecycleComponent: require("../assets/lifecycle-component.png"),
    lifecycleComponentWillMount: require("../assets/lifecycle-component-will-mount.png"),
    lifecycleComponentDidMount: require("../assets/lifecycle-component-did-mount.png"),

    lifecycleComponentStateDidupdate: require("../assets/lifecycle-component-state-did-update.png"),
    lifecycleComponentStateShouldUpdate: require("../assets/lifecycle-component-state-should-update.png"),
    lifecycleComponentStateWillUpdate: require("../assets/lifecycle-component-state-will-update.png"),

    lifecycleComponentPropsDidUpdate: require("../assets/lifecycle-component-props-did-update.png"),
    lifecycleComponentPropsShouldUpdate: require("../assets/lifecycle-component-props-should-update.png"),
    lifecycleComponentPropsWillReceive: require("../assets/lifecycle-component-props-will-receive.png"),
    lifecycleComponentPropsWillUpdate: require("../assets/lifecycle-component-props-will-update.png")
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
                                    <Appear><ListItem textColor="#fff">JSX</ListItem></Appear>
                                    <Appear><ListItem textColor="#fff">Props</ListItem></Appear>
                                    <Appear><ListItem textColor="#fff">State</ListItem></Appear>
                                    {/*<Appear><ListItem textColor="#fff">Lifecycle methods</ListItem></Appear>*/}
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    {/*<Slide>*/}
                        {/*<Text>In the React model components are:</Text>*/}
                        {/*<List>*/}
                            {/*<ListItem>Composable</ListItem>*/}
                            {/*<ListItem>Stateful</ListItem>*/}
                            {/*<ListItem>Declarative</ListItem>*/}
                        {/*</List>*/}
                    {/*</Slide>*/}

                    {/*<Slide>*/}
                        {/*<Heading>Composable</Heading>*/}
                    {/*</Slide>*/}

                    {/*<Slide transition={["slide"]} bgColor="#f1f1f1">*/}
                        {/*<Heading textColor="#333">Composable</Heading>*/}
                        {/*<List>*/}
                            {/*<Appear>*/}
                                {/*<ListItem>Components can be reused and recombined in ways not deliberately coded for by*/}
                                    {/*the component’s author.</ListItem>*/}
                            {/*</Appear>*/}
                            {/*<Appear>*/}
                                {/*<ListItem>Users can even pass one component to another to configure what it*/}
                                    {/*renders.</ListItem>*/}
                            {/*</Appear>*/}
                        {/*</List>*/}
                    {/*</Slide>*/}

                    {/*<Slide>*/}
                        {/*<Heading>Stateful</Heading>*/}
                    {/*</Slide>*/}

                    {/*<Slide>*/}
                        {/*<Heading>Declarative</Heading>*/}
                    {/*</Slide>*/}

                    {/*JSX*/}

                    {/*<Slide>*/}
                        {/*<Heading>React</Heading>*/}
                    {/*</Slide>*/}

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Layout style={{alignItems: "center", justifyContent: "space-between"}}>
                            <Fill>
                                <Heading fit textColor="#000">Remember the good old days of jQuery?</Heading>
                                <Text style={{margin: '20px 0'}} lineHeight={1.2}>
                                    Our <b>HTML</b> was pure HTML. Our <b>JavaScript</b> was pure JavaScript. Our
                                    concerns were
                                    perfectly <b>separated</b>.</Text>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Text>We’d write HTML like this</Text>
                        <CodePane
                            lang="jsx"
                            textSize=".6em"
                            source={require("raw-loader!../assets/jsx/jsx.unobtrusive.example")}
                            margin="20px auto"
                        />
                        <Text>Then we’d write JavaScript like this</Text>
                        <CodePane
                            lang="jsx"
                            textSize=".6em"
                            source={require("raw-loader!../assets/jsx/jsx.unobtrusive2.example")}
                            margin="20px auto"
                        />
                        <Appear>
                            <Text>This seems like a great idea.</Text>
                        </Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Layout style={{alignItems: "center", justifyContent: "space-between"}}>
                            <Fill>
                                <Heading textColor="#000" fit>How can we tell that these two lines are
                                    interconnected?</Heading>
                                <Appear>
                                    <Text>You <b>can’t</b> unless you read every single line of JavaScript. </Text>
                                </Appear>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Text lineHeight={1.2}>With this pattern, you <b>can’t change a line of markup</b> without <b>checking
                            every single line of JavaScript</b> to assure you’re not breaking a selector.</Text>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Text lineHeight={1.2}>Strictly separating HTML and JS actually led to applications that were <b>harder to maintain</b> and <b>debug</b>.</Text>
                        <List>
                            <Appear>
                                <ListItem>There is no actual separation going on</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>They are closely connected</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>They must be in sync or the application crashes</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide>
                        <Heading fit>Angular, Ember and Knockout</Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Text>Declaring bindings in HTML</Text>
                        <CodePane
                            lang="jsx"
                            textSize=".6em"
                            source={require("raw-loader!../assets/jsx/jsx.unobtrusive3.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Layout style={{alignItems: "center", justifyContent: "space-between"}}>
                            <Fill>
                                <List>
                                    <ListItem>Makes HTML more powerful by adding proprietary markup</ListItem>
                                    <Appear>
                                        <ListItem>The markup is effectively parsed as JavaScript</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem>When data changed, the UI changed.</ListItem>
                                    </Appear>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Text>Fundamental problem <b>we’re effectively putting JavaScript in our
                            HTML. </b></Text>
                    </Slide>

                    <Slide>
                        <Heading>JSX</Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1" textColor="primary">
                        <CodePane
                            lang="jsx"
                            textSize=".6em"
                            source={require("raw-loader!../assets/jsx/jsx.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Image src={images.waitwhat.replace("/", "")} margin="0px auto 40px" height="400px"/>
                        <Appear><Text textSize="2.4em" bold textColor="#333">HTML in JavaScript?!</Text></Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Text lineHeight={1.2}>JSX is <b>not</b> a template language. It is a <b>subset/dialect</b> of
                            Javascript</Text>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Heading textColor="#333">What is JSX?</Heading>
                        <Layout style={{alignItems: "center", margin: "40px -80px", justifyContent: "space-between"}}>
                            <Fill>
                                <List>
                                    <Appear>
                                        <ListItem>Purpose of JSX is to have some JavaScript code that can produce
                                            HTML</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem>It allows us to write what looks like HTML inside our
                                            JavaScript</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem>Behind the scenes it just JavaScript. It transpiles
                                            to regular JavaScript</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem>JSX is <b>not</b> HTML</ListItem>
                                    </Appear>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Heading textColor="#333" fit>Leverage the power of JavaScript</Heading>
                        <List>
                            <Appear>
                                <ListItem>JSX avoids the overhead of learning yet another framework syntax</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>You can enjoy all the power of JavasScript when working with your markup</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Heading textColor="#333">Compile-time Errors</Heading>
                        <Layout style={{alignItems: "center", margin: "40px -80px", justifyContent: "space-between"}}>
                            <Fill>
                                <Text lineHeight={1.2} style={{textAlign: 'left'}}>When you make a typo in HTML, you generally have no idea where you screwed up.</Text>
                                <List>
                                    <Appear>
                                        <ListItem>Same story with Angular. Your app will silently fail at runtime.</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem>In contrast, when you make a typo in JSX, it won’t compile.</ListItem>
                                    </Appear>
                                    <Appear>
                                        <ListItem>
                                            <Code>Parse Error: Line 23: Expected corresponding JSX closing tag for li while parsing file: /components/header.js</Code>
                                        </ListItem>
                                    </Appear>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Text lineHeight={1.2}>You might be wondering why does it look like <b>HTML</b>. Why not some
                            normal type of JavaScript</Text>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Text lineHeight={1.2}>You <b>don't have</b> to write JSX if you don't want to. But you really
                            want to, i <b>guarantee</b> you.</Text>
                    </Slide>

                    <Slide transition={["slide"]}>
                        <Text textColor="#fff">Lets look what <b>JSX</b> looks like in vanilla JavaScript</Text>
                    </Slide>

                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".8em"
                        code={require("raw!../assets/jsx/jsx.compiled.example")}
                        ranges={[
                            {loc: [0, 4], title: "React component"},
                            {loc: [1, 2], title: "JSX"},
                            {loc: [6, 11], note: "JSX turned into a function call"},
                            {loc: [7, 8], note: "First argument is HTML tag"},
                            {loc: [9, 10], note: "Third argument is the content of the div"},
                            {
                                loc: [6, 11],
                                note: "The reason we use JSX. Its really hard to figure out whats going on."
                            },
                            {loc: [6, 11]}
                        ]}/>


                    <Slide transition={["spin"]} bgColor="#f1f1f1" textColor="primary">
                        <Layout style={{alignItems: "center", margin: "40px -80px", justifyContent: "space-between"}}>
                            <Fill>
                                <Text textAlign="left" lineHeight={1.2} textColor="#333">JSX elements are treated as <b>JavaScript expressions</b>. They can be used anywhere. That means
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
                                        <ListItem textColor="#333" textSize="1.1em">Used in a function</ListItem>
                                    </Appear>
                                    <Appear>
                                        <CodePane
                                            lang="jsx"
                                            textSize=".6em"
                                            source={require("raw-loader!../assets/jsx/jsx.function.example")}
                                            margin="20px auto"
                                        />
                                    </Appear>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide bgColor="#f1f1f1">
                        <Heading size={1} textColor="#333">Attributes in JSX</Heading>
                        <Text italic style={{margin: "20px -80px"}}>JSX can have attributes just like HTML elements
                            can.</Text>
                        <List>
                            <Appear>
                                <ListItem textColor="#333">A single JSX element can have many attributes, just like
                                    HTML</ListItem>
                            </Appear>
                            <Appear>
                                <CodePane
                                    lang="jsx"
                                    textSize=".6em"
                                    source={require("raw-loader!../assets/jsx/jsx.attributes-many.example")}
                                    margin="20px auto"
                                />
                            </Appear>
                            <Appear>
                                <ListItem textColor="#333">Although they differ a bit from the regular HTML
                                    attributes</ListItem>
                            </Appear>
                            <Appear>
                                <CodePane
                                    lang="jsx"
                                    textSize=".6em"
                                    source={require("raw-loader!../assets/jsx/jsx.attributes.example")}
                                    margin="20px auto"
                                />
                            </Appear>
                        </List>
                    </Slide>

                    <Slide bgColor="#f1f1f1">
                        <Heading textColor="#333">JSX Components</Heading>
                        <Text style={{margin: "40px -80px"}}>Must be capitalized</Text>
                        <List>
                            <Appear>
                                <ListItem textColor="#333">When a JSX component start with a <b>lowercase</b> letter, it
                                    refers
                                    to the react build-in
                                    component like <b>{`<div>`}</b> or <b>{`<span>`}</b>
                                </ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textColor="#333">Components that start with a capital letter like <Text
                                    style={{display: "inline-block"}} bold>{`<Image/>`}</Text> compile to
                                    React.createElement(Image)</ListItem>
                            </Appear>
                        </List>
                    </Slide>


                    <Slide transition={["slide"]}>
                        <Text textColor="#fff" lineHeight={1.2}>"<b>JSX</b> is like a healthy vegetable that tastes like decadent
                            chocolate cake. You feel guilty, but it’s <b>good</b> for you."</Text>
                    </Slide>

                    <Slide>
                        <Heading textColor="#fff">Exercise 1</Heading>
                        <Text textColor="#fff">git checkout jsx</Text>
                    </Slide>

                    {/*// Exercises*/}
                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/exercises/exercise-1.example")}
                        ranges={[
                            {loc: [0, 23], title: 'Solution: exercise 1'},
                            {loc: [8, 16], note: 'Rendering JSX'},
                            {loc: [11, 12], note: "Remember that we use className in React instead of class."},
                            {loc: [12, 13], note: "Because there are braces around `ipsumText`, it is evaluated as a JavaScript expression."}
                        ]}/>


                    {/*React Component */}
                    <Slide bgImage={images.fightclub.replace("/", "")}>
                        <Text textSize="2.6em" textColor="#FFF" margin="20px 0px 0px">
                            #1 rule of <Text textColor="#FFF" textSize="1.6em" bold>React</Text>
                        </Text>
                        <Appear style={{margin: "40px -80px"}}>
                            <Text textSize="2.6em" textColor="#FFF">Everything is a
                                <Text textColor="#FFF" textSize="1.6em" bold>{'<Component />'}</Text>
                            </Text>
                        </Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <BlockQuote lineHeight={1.2}>
                            Let’s start by dismissing a <b>major misconception</b> about React.
                            that the main benefit of React is the <b>performance</b> benefit of using <b>virtual DOM</b> diffing to
                            render HTML.
                            Now, virtual DOM diffing is neat, but it’s just an enabling feature for React’s core idea,
                            which is its <b>component model</b>.
                        </BlockQuote>
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

                    {/*// Props */}
                    <Slide transition={["spin"]}>
                        <Heading textColor="#fff" size={2}>Props & State</Heading>
                    </Slide>


                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Text margin="0px 0px 50px">In <b>JSX</b>, props are provided as tag attributes</Text>
                        <Appear>
                            <CodePane
                                lang="jsx"
                                textSize=".6em"
                                source={require("raw-loader!../assets/props/props.use.example")}
                                margin="20px auto"
                            />
                        </Appear>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Heading textColor="#333">Props</Heading>
                        <List>
                            <Appear>
                                <ListItem>Props are passed from parent to child</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Can't be changed from inside the child component</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Props are owned by the parent</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/props/props.usage.example")}
                        ranges={[
                            {loc: [0, 37], note: 'Props'},
                            {loc: [28, 38], note: 'Render a contactList component'},
                            {loc: [34, 35], note: 'fill the items property'},
                            {loc: [3, 14], note: "ContactList component"},
                            {loc: [4, 9], note: "Map items props to array of components"},
                            {loc: [6, 7], note: "Props are passed from parent to child"},
                            {loc: [16, 27], note: "ContactItem component"},
                            {loc: [18, 26], note: "Render contact item component"},
                            {loc: [10, 13], note: "Render ContactList component"},
                        ]}/>


                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Text lineHeight={1.2}>The ability to configure components using <b>properties</b> is a key
                            factor in making React components <b>reusable</b> and <b>composable.</b></Text>
                    </Slide>

                    <Slide bgColor="#f1f1f1">
                        <Heading textColor="#333">Props</Heading>
                        <List>
                            <ListItem textColor="#333">We can set a default value for a props</ListItem>
                        </List>
                        <Appear>
                            <CodePane
                                lang="jsx"
                                textSize=".6em"
                                source={require("raw-loader!../assets/props/props.default.example")}
                                margin="20px auto"
                            />
                        </Appear>
                    </Slide>


                    {/*// state*/}
                    <Slide transition={["spin"]}>
                        <Text textSize="3em" textColor="#FFF" margin="20px 0px 0px">
                            Component <Text textColor="#FFF" textSize="1.6em" bold>State</Text>
                        </Text>
                    </Slide>

                    {/*<Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>*/}
                        {/*<Text lineHeight={1.2}>So far we have created <b>stateless</b> components, the data provided*/}
                            {/*doesnt change, they are only concerned about render data. They are*/}
                            {/*<b>presentational</b></Text>*/}
                    {/*</Slide>*/}

                    <Slide bgColor="#f1f1f1" transition={["slide"]}>
                        <Heading margin="20px 0px 0px" size={2}>Statefull component</Heading>
                        <List>
                            <Appear>
                                <ListItem>Passes its state to the children via props.</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Encapsulate all the interaction logic in one place</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>The stateless component takes care of rendering data</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/state/state.statefull.example")}
                        ranges={[
                            {loc: [0, 28], title: 'Statefull component'},
                            {loc: [3, 6], note: 'Initial state'},
                            {loc: [11, 19], note: "Render the component"},
                            {loc: [14, 15], note: "Handle interaction logic"},
                            {loc: [7, 10], note: "Increment the count state"},
                            {loc: [3, 6], note: 'Count is now 1'},
                            {loc: [11, 19], note: "Re-render the component"},
                            {loc: [15, 16], note: "Pass it state to the child component via a prop"},
                            {loc: [22, 27], note: "Stateless component re-renders with new data"},
                        ]}
                    />

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Text lineHeight={1.2}>"<b>State</b> is best described as how a component data looks at a <b>given
                            point in time."</b></Text>
                    </Slide>

                    <Slide transition={["spin"]}>
                        <Text bold textSize="2.6em" textColor="#FFF" margin="20px 0px 0px">
                            So how does state work?
                        </Text>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Heading margin="20px 0px 0px" size={2}>State</Heading>
                        <List>
                            <Appear>
                                <ListItem>State is een plain JavaScript object.</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Before using state, you have <b>initialize</b> it</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>You can access the state via <b>this.state</b></ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>You can provide the initial state of the component</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Mutate state by calling <b>this.setState(data)</b> </ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/state/state.initial.example")}
                        ranges={[
                            {loc: [0, 14], title: 'State'},
                            {loc: [2, 6], note: 'Set and initial state'},
                            {loc: [7, 13], note: "Render the component"},
                            {loc: [9, 11], note: "Read the state"}
                        ]}
                    />


                    <Slide transition={["fade", "slide"]} bgColor="#f1f1f1">
                        <Heading textColor="#333" size={2}>State</Heading>
                        <List>
                            <Appear>
                                <ListItem>Each instance of a component has its own copy of state.</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>If state is changed by using <b>this.setState()</b> it re-renders the component.</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>Component children will also re-render.</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem><b>Important!</b> this.setState() is async </ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide transition={["fade", "slide"]} bgColor="#f1f1f1" textColor="primary">
                        <Heading textColor="#333" style={{margin: '50px 0'}}>Props vs State</Heading>
                        <Table>
                            <thead>
                            <TableRow>
                                <TableHeaderItem style={{padding: '10px 0'}} bgColor="#fff"
                                                 textColor="#333">Props</TableHeaderItem>
                                <TableHeaderItem style={{padding: '10px 0'}} bgColor="#fff"
                                                 textColor="#333">State</TableHeaderItem>
                            </TableRow>
                            </thead>
                            <tbody style={{margin: '40px 0'}}>
                            <TableRow>
                                <TableItem style={{padding: '10px 0'}} textSize="1.2em" textColor="#333">Passed in from
                                    the parent</TableItem>
                                <TableItem textColor="#333" textSize="1.2em">Created within Component</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem style={{padding: '10px 0'}} textSize="1.2em"
                                           textColor="#333">{`<App message="hello world" />`}</TableItem>
                                <TableItem textColor="#333" textSize="1.2em">Set initial state</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem style={{padding: '10px 0'}} textSize="1.2em" textColor="#333">this.props is
                                    read-only within</TableItem>
                                <TableItem textColor="#333" textSize="1.2em">this.state to read</TableItem>
                            </TableRow>
                            <TableRow>
                                <TableItem style={{padding: '10px 0'}} textSize="1.2em" textColor="#333">Can be
                                    defaulted and validated</TableItem>
                                <TableItem textColor="#333" textSize="1.2em">this.setState() to change</TableItem>
                            </TableRow>
                            </tbody>
                        </Table>
                    </Slide>


                    <Slide>
                        <Heading textColor="#fff">Exercise 2</Heading>
                        <Text textColor="#fff">git checkout state</Text>
                    </Slide>


                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/exercises/exercise-2.example")}
                        ranges={[
                        {loc: [0, 23], title: 'Solution: exercise 2'},
                        {loc: [10, 22], note: 'Rendering JSX'},
                        {loc: [15, 16], note: "Add a onClick handler to the button"},
                        {loc: [6, 9], note: "In the onClick handler we increment the state"},
                        {loc: [10, 22], note: "This triggers a re-render"},
                        {loc: [18, 19], note: "The state is now 1"}
                    ]}/>


                    <Slide>
                        <Heading textColor="#fff">Exercise 3</Heading>
                        <Text textColor="#fff">git checkout lift state</Text>
                    </Slide>


                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/exercises/exercise-3.example")}
                        ranges={[
                        {loc: [0, 49], title: 'Solution: exercise 3'},
                        {loc: [12, 20], note: 'Rendering verdict jsx'},
                        {loc: [15, 16], note: "Check if the won propery is true and render the 'you won!' text"},
                        {loc: [16, 17], note: "Pass a function into the onIncrement prop"},
                        {loc: [6, 11], note: "Function passed to the counter component"},
                        {loc: [22, 47], note: "Counter component"},
                        {loc: [40, 41], note: "When clicked on the counter"},
                        {loc: [28, 34], note: "Increment counter function"},
                        {loc: [29, 30], note: "Save the new increment value into a variable"},
                        {loc: [31, 32], note: "Update the state of the counter component"},
                        {loc: [32, 33], note: "Execute the paren function with the new counter value"},
                        {loc: [6, 11], note: "Check if the passed value equals 10"},

                    ]}/>

                    <Slide>
                        <Heading textColor="#fff">Exercise 2</Heading>
                        <Text textColor="#fff">git checkout component-state</Text>
                    </Slide>

                    <Slide transition={["spin"]}>
                        <Heading fit caps>Components internals</Heading>
                        <Text margin="20px 0px 0px" textColor="#fff" lineHeight={1.2}>What if we want to do something
                            before or after the component has rendered or mounted? What if we want to avoid a
                            re-render?</Text>
                    </Slide>

                    <Slide >
                        <Heading caps fit textSize="1.7em">We need more control</Heading>
                        <Text textAlign="middle" textColor="#fff" lineHeight={1.1}>over the stages that a component goes
                            through. The process where all these stages are involved is called the</Text>
                        <Appear>
                            <Heading bold margin="40px 0px 0px" textSize="2.2em">Component lifecycle</Heading>
                        </Appear>
                    </Slide>

                    <Slide transition={["fade", "slide"]}>
                        <Text textAlign="left" textColor="#fff" lineHeight={1.2}>Basically all the React components
                            lifecycle methods can be split in four phases:</Text>
                        <List>
                            <Appear>
                                <ListItem textColor="#fff">Initialization</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textColor="#fff">Mounting</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textColor="#fff">Updating</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textColor="#fff">Unmounting</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide transition={["fade", "slide"]}>
                        <Heading>Initialization</Heading>
                    </Slide>

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Text lineHeight={1.2}>
                            The <b>initialization </b> phase is where we define defaults and initial values for Props
                            and State. By using <b>defaultProps</b> and <b>state</b>
                        </Text>
                    </Slide>

                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/lifecycle/lifecycle.initialization.example")}
                        ranges={[
                            {loc: [1, 25], note: 'Example'},
                            {loc: [3, 6], note: 'default props are called once and are cached'},
                            {loc: [7, 10], note: "initial state set on creation."},
                            {loc: [19, 29], title: "Component render"},
                            {loc: [22, 23], note: "prop title = Basic counter!!!"},
                            {loc: [23, 24], note: "state count = 0"}
                        ]}
                    />

                    <Slide transition={["fade", "slide"]}>
                        <Heading>Mounting</Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Image src={images.lifecycleMount.replace("/", "")}/>
                    </Slide>

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Text lineHeight={1.2}>
                            <b>Mounting</b> is the process that occurs when a component is
                            being inserted into the the DOM. This phase has two methods: <b>ComponentWillMount</b> and
                            <b>ComponentDidMount</b>
                        </Text>
                    </Slide>

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" fit>ComponentWillMount()</Heading>
                        <Text margin="40px 0px 0px" textColor="#333">is the first called in this phase.</Text>

                        <List>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333">Invoked once and immediately before the
                                    initial rendering occurs</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333">Hence before React inserts the component
                                    into the DOM</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333">It’s very important to note that calling
                                    this.setState() within this method will not trigger a re-render</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/lifecycle/lifecycle.componentWillMount.example")}
                        ranges={[
                            {loc: [0, 24], title: 'componentWillMount'},
                            {
                                loc: [6, 17],
                                note: 'The componentWillMount() is a chance for us to handle configuration, update our state, and in general prepare for the first render'
                            },
                            {loc: [9, 14], note: "Compute the new mode"},
                            {loc: [14, 15], note: "Set the new state for mode"},
                            {loc: [17, 24], note: "Render component"},
                            {loc: [19, 20], note: "Set the className we computed in componentWillMount()"}
                        ]}
                    />

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" fit>ComponentDidMount()</Heading>
                        <Text margin="40px 0px 0px" textColor="#333">is the second method called in this phase.</Text>
                        <List>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333"> Invoked once and
                                    immediately after insertion in the DOM</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333">Now the updated DOM is available for
                                    access</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333">Best for DOM access and data fetching
                                    operations</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide transition={["fade", "slide"]}>
                        <Heading>Updating</Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Image src={images.lifecycleUpdate.replace("/", "")}/>
                    </Slide>

                    <Slide bgColor="#f1f1f1" lineHeight={1.2} transition={["fade", "slide"]}>
                        <Heading size={1} fit caps lineHeight={1} textColor="#333">
                            There are also methods that will allow us
                        </Heading>
                        <Heading size={2} fit caps margin="15px 0px" textColor="#333">
                            to execute code
                        </Heading>
                        <Heading size={1} fit caps textColor="#333">
                            when a component’s state or properties get updated.
                        </Heading>
                    </Slide>

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" fit>ComponentWillReceiveProps()</Heading>
                        <Text textAlign="left" margin="30px 0px 0px" textColor="#333">Invoked when a component is
                            receiving new props</Text>
                        <List>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333">Provides a change to update state in
                                    response to a prop change without triggering an extra render</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333">Can still access the old props via
                                    this.props</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" fit>ComponentWillReceiveProps()</Heading>
                        <Text textAlign="left" textSize="1.2em" margin="50px 0px 0px" textColor="#333">If we want to
                            update the state whenever the parent passes the property initialCount</Text>
                        <List>
                            <Appear>
                                <CodePane
                                    lang="jsx"
                                    textSize=".6em"
                                    source={require("raw-loader!../assets/lifecycle/lifecycle.componentWillReceivePRops.example")}
                                    margin="20px auto"
                                />
                            </Appear>
                        </List>
                    </Slide>

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" margin="0px 0px 40px"
                                 fit>shouldComponentUpdate()</Heading>
                        <Text lineHeight={1.2}>
                            Decides whether the next component’s state should <b>trigger a re-render or not</b>. This
                            method renders a boolean value, <b>by default true</b>
                        </Text>
                    </Slide>

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" margin="0px 0px 40px"
                                 fit>shouldComponentUpdate()</Heading>

                        <Text>
                            But we can return <b>false</b> and the next methods <b>won’t be
                            called:</b>
                        </Text>

                        <List>
                            <ListItem textColor="#333">componentWillUpdate()</ListItem>
                            <ListItem textColor="#333">render()</ListItem>
                            <ListItem textColor="#333">componentDidUpdate()</ListItem>
                        </List>
                    </Slide>

                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/lifecycle/lifecycle.shouldComponentUpdate.example")}
                        ranges={[
                            {loc: [0, 14], title: 'shouldComponentUpdate'},
                            {loc: [2, 8], note: 'Check if we should re-render'},
                            {loc: [3, 6], note: "Is text prop equal to current prop"},
                            {loc: [6, 7], note: "prop is different so re-render"},
                            {loc: [9, 12], note: "Component render"},
                        ]}
                    />

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" margin="0px 0px 40px"
                                 fit>componentWillUpdate()</Heading>
                        <Text lineHeight={1.2}>
                            is called <b>immediately before rendering, when new props or state are being received</b>.
                            We can use this as an opportunity to perform preparation before an updates occurs, however
                            is <b>not allowed to use this.setState()</b>
                        </Text>
                    </Slide>

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" fit>componentWillUpdate()</Heading>
                        <List>
                            <Appear>
                                <ListItem>this.state will reflect the old rendered UI.</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>setState() cant be used here</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem>
                                    Some of the more common uses
                                    <CodePane
                                        lang="jsx"
                                        textSize=".6em"
                                        source={require("raw-loader!../assets/lifecycle/lifecycle.componentWillUpdate.example")}
                                        margin="20px auto"
                                    />
                                </ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" margin="0px 0px 40px"
                                 fit>componentDidUpdate()</Heading>
                        <Text lineHeight={1.2}>
                            Method is called <b>immediately after React updates the DOM</b>. We can use this method to
                            interact with the updated DOM or perform any action post-render.
                        </Text>
                    </Slide>

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" margin="0px 0px 40px"
                                 fit>componentDidUpdate()</Heading>
                        <List>
                            <Appear>
                                <ListItem textColor="#333">Any DOM interactions should always happen in this phase
                                    not inside the render method.</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textColor="#333">A common case for this method is when we are using a
                                    third-party library that needs the rendered DOM to perform its job.</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/lifecycle/lifecycle.componentDidUpdate.example")}
                        ranges={[
                            {loc: [0, 18], title: 'componentDidUpdate'},
                            {loc: [6, 11], note: 'Set a ref for accessing the element'},
                            {
                                loc: [2, 5],
                                note: "We initialize the library the first time in the componentDidMount()"
                            },
                            {
                                loc: [12, 16],
                                note: "After some prop or state change that triggers a DOM update we need to update as well the third-party library to keep our interface consistent"
                            }
                        ]}
                    />

                    <Slide transition={["fade", "slide"]}>
                        <Heading>Unmounting</Heading>
                    </Slide>

                    <Slide transition={["slide"]} bgColor="#f1f1f1">
                        <Image src={images.lifecycleUnmount.replace("/", "")}/>
                    </Slide>

                    <Slide bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" margin="0px 0px 40px"
                                 fit>componentWillUnmount()</Heading>
                        <Text lineHeight={1.2}>
                            It is called <b>immediately before the component is unmounted from the DOM.</b>
                            We can use it to perform any cleanup we might need
                        </Text>
                    </Slide>

                    <Slide>
                        <Heading textColor="#fff">Exercise 3</Heading>
                        <Text textColor="#fff">git checkout component-lifecycle</Text>
                    </Slide>
                </Deck>
            </Spectacle>
        );
    }
}
