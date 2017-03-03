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
                    <Slide maxWidth={1200} transition={["zoom"]} bgColor="#333">
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
                    <Slide maxWidth={1200} transition={["slide"]}>
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

                    {/*REACT has no*/}
                    <Slide maxWidth={1200} transition={["fade"]} bgColor="#f1f1f1" textColor="primary">
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
                    <Slide maxWidth={1200} transition={["slide"]} bgColor="#f1f1f1" textColor="primary">
                        <Heading size={2} textColor="#333">Components</Heading>
                        <Text style={{margin: "40px -80px"}}>So how does a React component look?</Text>
                        <Appear>
                            <CodePane
                                lang="jsx"
                                textSize=".6em"
                                source={require("raw-loader!../assets/component/component.example")}
                                margin="20px auto"
                            />
                        </Appear>
                    </Slide>

                    <Slide maxWidth={1200} transition={["Slide"]} bgColor="#f1f1f1">
                        <Image src={images.waitwhat.replace("/", "")} margin="0px auto 40px" height="400px"/>
                        <Appear><Text textSize="2.4em" bold textColor="#333">HTML in JavaScript?!</Text></Appear>
                    </Slide>

                    {/*FIRST REACTION*/}
                    <Slide maxWidth={1200} transition={["spin", "zoom"]} bgColor="#f1f1f1" textColor="primary">
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

                    <Slide maxWidth={1200} transition={["spin", "zoom"]} bgColor="#f1f1f1" textColor="secondary">
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

                    <Slide textColor="primary">
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
                            {loc: [6, 11]}
                        ]}/>


                    <Slide maxWidth={1200} transition={["spin"]} bgColor="#f1f1f1" textColor="primary">
                        <Heading style={{textAlign: "center"}} size={2} textAlign="left" caps textColor="#333"
                                 textFont="primary">JSX</Heading>
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
                                <ListItem textColor="#333">When a JSX component start with a lowercase letter, it refers
                                    to the react build-in
                                    component like <Text style={{display: "inline-block"}} bold>{`<div>`}</Text> or
                                    <Text style={{display: "inline-block"}} bold>{`<span>`}</Text></ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textColor="#333">Components that start with a capital letter like <Text
                                    style={{display: "inline-block"}} bold>{`<Image />`}</Text> compile to
                                    React.createElement(Image)</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    {/*// Exercises*/}
                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/exercises/exercise-1.example")}
                        ranges={[
                            {loc: [3, 24], note: 'Solution: exercise 1'},
                            {loc: [5, 8], title: 'state'},
                            {loc: [13, 22], title: "Render"},
                            {loc: [17, 18], title: "Map to components"},
                            {loc: [9, 12], title: "Render ListItem"},
                            {loc: [24, 25], title: "List item component"}
                        ]}/>

                    {/*// PROPS and STATE*/}
                    <Slide maxWidth={1200} transition={["spin"]}>
                        <Heading textColor="#fff" size={2}>Props & State</Heading>
                    </Slide>

                    <Slide maxWidth={1200} transition={["slide"]} bgColor="#f1f1f1">
                        <Heading c textColor="#333">Props</Heading>
                        <List>
                            <Appear><ListItem>We can pass data into our components by using props</ListItem></Appear>
                        </List>
                        <Appear>
                            <CodePane
                                lang="jsx"
                                textSize=".6em"
                                source={require("raw-loader!../assets/props/props.use.example")}
                                margin="20px auto"
                            />
                        </Appear>
                        <Appear>
                            <List>
                                <ListItem textColor="#333">We can access props by using <Text
                                    style={{display: 'inline-block'}} bold>this.props</Text> and then the name of
                                    the prop.</ListItem>
                            </List>
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

                    <Slide maxWidth={1200} transition={["fade", "zoom"]} bgColor="#f1f1f1">
                        <Heading textColor="#333">Props</Heading>
                        <List>
                            <ListItem textColor="#333">We can define the properties we are looking for in our
                                component</ListItem>
                        </List>
                        <Appear>
                            <CodePane
                                lang="jsx"
                                textSize=".6em"
                                source={require("raw-loader!../assets/props/props.prop-types.example")}
                                margin="20px auto"
                            />
                        </Appear>
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
                    <Slide maxWidth={1200}>
                        <Text textSize="2.6em" textColor="#FFF" margin="20px 0px 0px">
                            Component <Text textColor="#FFF" textSize="1.6em" bold>State</Text>
                        </Text>
                    </Slide>

                    <Slide bgColor="#f1f1f1">
                        <Heading style={{margin: "40px -80px"}} textColor="#333" size={2}>Setting initial
                            state</Heading>
                        <List>
                            <Appear><ListItem textColor="#333">State is een plain JavaScript object.</ListItem></Appear>
                            <Appear><ListItem textAlign="left" textColor="#333">Before using state you have declare a
                                set of values for the initial state</ListItem></Appear>
                        </List>
                        <Appear>
                            <CodePane
                                lang="jsx"
                                textSize=".6em"
                                source={require("raw-loader!../assets/state/state.initial.example")}
                                margin="20px auto"
                            />
                        </Appear>

                    </Slide>

                    <Slide bgColor="#f1f1f1">
                        <Heading style={{margin: "40px -80px"}} textColor="#333" size={2}>Setting State</Heading>
                        <List>
                            <Appear><ListItem textColor="#333">State is een plain JavaScript object.</ListItem></Appear>
                            <Appear><ListItem textColor="#333">Before using state you have declare a
                                set of values for the initial state</ListItem></Appear>
                        </List>
                        <Appear>
                            <CodePane
                                lang="jsx"
                                textSize=".6em"
                                source={require("raw-loader!../assets/state/state.set.example")}
                                margin="20px auto"
                            />
                        </Appear>
                    </Slide>

                    <Slide maxWidth={1200} transition={["spin"]} bgColor="#f1f1f1">
                        <Heading textColor="#333" size={2}>State</Heading>
                        <List>
                            <Appear><ListItem textColor="#333">State is een plain JavaScript object.</ListItem></Appear>
                            <Appear><ListItem textColor="#333">Before using state, you have initialize
                                it</ListItem></Appear>
                            <Appear>
                                <CodePane
                                    lang="jsx"
                                    textSize=".6em"
                                    source={require("raw-loader!../assets/state/state.init.example")}
                                    margin="20px auto"
                                />
                            </Appear>
                            <Appear><ListItem textColor="#333">Each instance of a component has its own copy of
                                state.</ListItem></Appear>
                            <Appear><ListItem textColor="#333">If state changes it re-renders the component.</ListItem></Appear>
                            <Appear><ListItem textColor="#333">Component children will also re-render.
                            </ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide maxWidth={1200} transition={["slide"]} bgColor="#f1f1f1"
                           notes="if we just change the value of this.state object. React doesnt really know it has changed. instead we use this method to inform react the state is changed. React can then determine which is the best time to update its state. its oke to reference a property from this.state. But never assign a value to it. ( this.state.play = true )">
                        <Heading textColor="#333">State</Heading>
                        <List>
                            <Appear><ListItem textColor="#333">Only use this.state assignment in the class
                                property</ListItem></Appear>
                            <Appear><ListItem textColor="#333">Everywhere else in all of our components, instead of
                                using this.state assignment. We use a method called this.setState();</ListItem></Appear>
                            <Appear><ListItem textColor="#333">Important! this.setState() is async </ListItem></Appear>
                        </List>
                    </Slide>

                    <Slide maxWidth={1200} transition={["slide"]} bgColor="#f1f1f1" textColor="primary">
                        <Heading textColor="#333" style={{margin: '40px 0'}}>Props VS State</Heading>
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
                                <TableItem textColor="#333" textSize="1.2em">this.setState() to update</TableItem>
                            </TableRow>
                            </tbody>
                        </Table>
                    </Slide>

                    <Slide >
                        <Heading textColor="#fff">Exercise 2</Heading>
                        <Text textColor="#fff">git checkout component-state</Text>
                    </Slide>

                    <Slide maxWidth={1200}>
                        <Heading fit caps>Components internals</Heading>
                        <Text margin="20px 0px 0px" textColor="#fff" lineHeight={1.2}>What if we want to do something
                            before or after the component has rendered or mounted? What if we want to avoid a
                            re-render?</Text>
                    </Slide>

                    <Slide maxWidth={1200}>
                        <Heading caps fit textSize="1.7em">We need more control</Heading>
                        <Text textAlign="middle" textColor="#fff" lineHeight={1.1}>over the stages that a component goes
                            through. The process where all these stages are involved is called the</Text>
                        <Appear>
                            <Heading bold margin="40px 0px 0px" textSize="2.2em">Component lifecycle</Heading>
                        </Appear>
                    </Slide>

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
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

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Heading>Initialization</Heading>
                    </Slide>

                    <Slide maxWidth={1200} bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Markdown>
                            {`The **initialization** phase is where we define defaults and initial values for Props and State. By using **defaultProps** and **state**`}
                        </Markdown>
                    </Slide>

                    <CodeSlide maxWidth={1200}
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

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Heading>Mounting</Heading>
                    </Slide>

                    <Slide maxWidth={1200} bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Text textColor="#333" lineHeight={1.2}>Mounting is the process that occurs when a component is
                            being inserted into the the DOM. This phase has two methods:</Text>
                        <Appear>
                            <Heading textSize="2em" textColor="#333" textAlign="center" margin="40px 0px 0px">ComponentWillMount</Heading>
                        </Appear>
                        <Appear>
                            <Heading textSize="1.4em" textColor="#333" textAlign="center" margin="20px 0px 0px">and</Heading>
                        </Appear>
                        <Appear>
                            <Heading textSize="2em" textColor="#333" textAlign="center" margin="20px 0px 0px">ComponentDidMount</Heading>
                        </Appear>
                    </Slide>

                    <Slide bgColor="#f1f1f1" maxWidth={1200} transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" fit>ComponentWillMount()</Heading>
                        <Text margin="40px 0px 0px" textColor="#333" >is the first called in this phase.</Text>

                        <List>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333" >Invoked once and immediately before the initial rendering occurs</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333" >Hence before React inserts the component into the DOM</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333" >It’s very important to note that calling this.setState() within this method will not trigger a re-render</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide maxWidth={1200} bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" fit>ComponentDidMount()</Heading>
                        <Text margin="40px 0px 0px" textColor="#333" >is the second method called in this phase.</Text>
                        <List>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333"> Invoked once and
                                    immediately after insertion in the DOM</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333">Now the updated DOM is available for access</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333">Best for DOM access and data fetching operations</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Heading>Updating</Heading>
                    </Slide>

                    <Slide maxWidth={1200} bgColor="#f1f1f1" lineHeight={1.2} transition={["fade", "slide"]}>
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

                    <Slide maxWidth={1200} bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" fit>ComponentWillReceiveProps()</Heading>
                        <Text textAlign="left" margin="30px 0px 0px" textColor="#333" >Invoked when a component is receiving new props</Text>
                        <List>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333">Calling this.setState() within this function will not trigger an additional re-render</ListItem>
                            </Appear>
                            <Appear>
                                <ListItem textSize="1.2em" textColor="#333">Can access the old props via this.props</ListItem>
                            </Appear>
                        </List>
                    </Slide>

                    <Slide maxWidth={1200} bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" fit>ComponentWillReceiveProps()</Heading>
                        <Text textAlign="left" textSize="1.2em" margin="50px 0px 0px" textColor="#333" >If we want to update the state whenever the parent passes the property initialCount</Text>
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

                    <Slide maxWidth={1200} bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" margin="0px 0px 40px" fit>shouldComponentUpdate()</Heading>
                        <Markdown>
                            {`Decides whether the next component’s state should **trigger a re-render or not**. This method renders a boolean value, **by default true**`}
                        </Markdown>
                    </Slide>

                    <Slide maxWidth={1200} bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" margin="0px 0px 40px" fit>shouldComponentUpdate()</Heading>
                        <Text textAlign="left" textColor="#333" >But we can return false and the next methods won’t be called:</Text>
                        <List>
                            <ListItem textColor="#333">componentWillUpdate()</ListItem>
                            <ListItem textColor="#333">render()</ListItem>
                            <ListItem textColor="#333">componentDidUpdate()</ListItem>
                        </List>
                    </Slide>

                    <CodeSlide maxWidth={1200}
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

                    <Slide maxWidth={1100} bgColor="#f1f1f1" transition={["fade", "slide"]}>
                        <Heading textSize="2em" textColor="#333" margin="0px 0px 40px" fit>componentWillUpdate()</Heading>
                        <Markdown>
                            {`is called **immediately before rendering, when new props or state are being received**.
                            We can use this as an opportunity to perform preparation before an updates occurs, however is **not allowed to use this.setState()**.`}
                        </Markdown>
                    </Slide>

                    <Slide maxWidth={1200}>
                        <Heading>Initialization</Heading>
                        <List>
                            <ListItem textColor="#333">Component instantiated</ListItem>
                            <ListItem textColor="#333">Default state</ListItem>
                            <ListItem textColor="#333">DefaultProps</ListItem>
                            <ListItem textColor="#333">ComponentWillMount</ListItem>
                            <ListItem textColor="#333">Render</ListItem>
                            <ListItem textColor="#333">ComponentDidMount</ListItem>
                        </List>
                    </Slide>

                    <Slide maxWidth={1200}>
                        <Heading>d</Heading>
                        <List>
                            <ListItem>The first two methods being called are state, defaultProps</ListItem>
                            <ListItem>Both methods are only called once when initially rendering the
                                component</ListItem>
                        </List>
                        <CodePane
                            lang="jsx"
                            textSize=".6em"
                            source={require("raw-loader!../assets/lifecycle/init.lifecycle.example")}
                            margin="20px auto"
                        />
                    </Slide>

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Heading size={2} style={{margin: '40px 0'}}>Component lifecycle</Heading>
                        <Layout>
                            <Fill style={{alignSelf: 'center'}}>
                                <Image src={images.lifecycleComponent.replace("/", "")}/>
                            </Fill>
                            <Fill>
                                <List>
                                    <ListItem bold>ComponentWillMount</ListItem>
                                    <ListItem>componentWillMount is called before the render method is executed. It is
                                        important to note that setting the state in this phase will not trigger a
                                        re-rendering.</ListItem>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Heading textColor="#FFF" size={2}>Component lifecycle</Heading>
                        <Heading textColor="#FFF" size={4} style={{margin: '40px 0'}}>Initialization</Heading>
                        <Layout>
                            <Fill style={{alignSelf: 'center'}}>
                                <Image src={images.lifecycleComponentWillMount.replace("/", "")}/>
                            </Fill>
                            <Fill>
                                <List>
                                    <ListItem textColor="#FFF">componentWillMount is called before the render method is
                                        executed.</ListItem>
                                    <ListItem textColor="#FFF">It is important to note that setting the state in this
                                        phase will not trigger a re-rendering.</ListItem>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Heading textColor="#FFF" size={2} style={{margin: '40px 0'}}>Component lifecycle</Heading>
                        <Layout>
                            <Fill style={{alignSelf: 'center'}}>
                                <Image src={images.lifecycleComponentDidMount.replace("/", "")}/>
                            </Fill>
                            <Fill>
                                <List>
                                    <ListItem textColor="#FFF">As soon as the render method has been executed the
                                        componentDidMount function is called</ListItem>
                                    <ListItem textColor="#FFF">Any DOM interactions should always happen in this phase
                                        not inside the render method.</ListItem>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide maxWidth={1200}>
                        <Heading>State changes</Heading>
                        <ListItem textColor="#333">Updating State</ListItem>
                        <ListItem textColor="#333">ShouldComponentUpdate(nextProps, nextState)</ListItem>
                        <ListItem textColor="#333">ComponentWillUpdate(nextProps, nextState)</ListItem>
                        <ListItem textColor="#333">Render</ListItem>
                        <ListItem textColor="#333">ComponentDidUpdate</ListItem>
                    </Slide>


                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Layout>
                            <Fill style={{alignSelf: 'center'}}>
                                <Image src={images.lifecycleComponentStateShouldUpdate.replace("/", "")}/>
                            </Fill>
                            <Fill>
                                <List>
                                    <ListItem textColor="#FFF">As soon as the render method has been executed the
                                        componentDidMount function is called</ListItem>
                                    <ListItem textColor="#FFF">Any DOM interactions should always happen in this phase
                                        not inside the render method.</ListItem>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Layout>
                            <Fill style={{alignSelf: 'center'}}>
                                <Image src={images.lifecycleComponentStateWillUpdate.replace("/", "")}/>
                            </Fill>
                            <Fill>
                                <List>
                                    <ListItem textColor="#FFF">As soon as the render method has been executed the
                                        componentDidMount function is called</ListItem>
                                    <ListItem textColor="#FFF">Any DOM interactions should always happen in this phase
                                        not inside the render method.</ListItem>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Layout>
                            <Fill style={{alignSelf: 'center'}}>
                                <Image src={images.lifecycleComponentStateDidupdate.replace("/", "")}/>
                            </Fill>
                            <Fill>
                                <List>
                                    <ListItem textColor="#FFF">As soon as the render method has been executed the
                                        componentDidMount function is called</ListItem>
                                    <ListItem textColor="#FFF">Any DOM interactions should always happen in this phase
                                        not inside the render method.</ListItem>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide maxWidth={1200}>
                        <Heading>Prop changes</Heading>
                        <ListItem textColor="#333">Updating Props</ListItem>
                        <ListItem textColor="#333">ComponentWillReceiveProps(props)</ListItem>
                        <ListItem textColor="#333">ShouldComponentUpdate(nextProps, nextState)</ListItem>
                        <ListItem textColor="#333">ComponentWillUpdate(nextProps, nextState)</ListItem>
                        <ListItem textColor="#333">Render</ListItem>
                        <ListItem textColor="#333">ComponentDidUpdate</ListItem>
                    </Slide>

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Layout>
                            <Fill style={{alignSelf: 'center'}}>
                                <Image src={images.lifecycleComponentPropsWillReceive.replace("/", "")}/>
                            </Fill>
                            <Fill>
                                <List>
                                    <ListItem textColor="#FFF">As soon as the render method has been executed the
                                        componentDidMount function is called</ListItem>
                                    <ListItem textColor="#FFF">Any DOM interactions should always happen in this phase
                                        not inside the render method.</ListItem>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Layout>
                            <Fill style={{alignSelf: 'center'}}>
                                <Image src={images.lifecycleComponentPropsShouldUpdate.replace("/", "")}/>
                            </Fill>
                            <Fill>
                                <List>
                                    <ListItem textColor="#FFF">As soon as the render method has been executed the
                                        componentDidMount function is called</ListItem>
                                    <ListItem textColor="#FFF">Any DOM interactions should always happen in this phase
                                        not inside the render method.</ListItem>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Layout>
                            <Fill style={{alignSelf: 'center'}}>
                                <Image src={images.lifecycleComponentPropsWillUpdate.replace("/", "")}/>
                            </Fill>
                            <Fill>
                                <List>
                                    <ListItem textColor="#FFF">As soon as the render method has been executed the
                                        componentDidMount function is called</ListItem>
                                    <ListItem textColor="#FFF">Any DOM interactions should always happen in this phase
                                        not inside the render method.</ListItem>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <Slide maxWidth={1200} transition={["fade", "slide"]}>
                        <Layout>
                            <Fill style={{alignSelf: 'center'}}>
                                <Image src={images.lifecycleComponentPropsDidUpdate.replace("/", "")}/>
                            </Fill>
                            <Fill>
                                <List>
                                    <ListItem textColor="#FFF">As soon as the render method has been executed the
                                        componentDidMount function is called</ListItem>
                                    <ListItem textColor="#FFF">Any DOM interactions should always happen in this phase
                                        not inside the render method.</ListItem>
                                </List>
                            </Fill>
                        </Layout>
                    </Slide>

                    <CodeSlide
                        transition={["fade"]}
                        lang="jsx"
                        textSize=".7em"
                        code={require("raw!../assets/exercises/exercise-2.example")}
                        ranges={[
                            {loc: [3, 30], note: 'Solution: exercise 2'},
                            {loc: [19, 29], title: "Render"},
                            {loc: [25, 26], title: "Toggle button"},
                            {loc: [9, 14], title: "Click handler"},
                            {loc: [10, 13], title: "set state"}
                        ]}/>

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
