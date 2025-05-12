// <!-- REACT IS A JS LIBRARY MADE BY FACEBOOK AND USED BY NETFLIX AND INSTAGRAM -->
// <!-- SINGLE PAGE APPLICATIONS -->
// <!-- REACT IS A LIBRARY NOT A FRAMEWORK -->
// <!-- USES VIRTUAL DOM , NO NEED TO REFRESH DOM -->
// <!-- REACT FIRST CREATES AN EXACT COPY OF THE DOM AND ONLY COPIES THE NEW PART OF VIRTUAL DOM TO ACTUAL DOM  -->
// JSX WILL BE CONVERTED TO JS USING BABEL
// we cant return multiple elements in react at once but we can wrap them in a single element
// WE CAN USE JSX INSIIDE OF LOOPS
// HTML ATTRIBUTES LIKE CLASS BECOME CLASSNAME IN CAMEL CASE
// HTML TAGS MUST ALWAYS BE CLOSED
// FUNCTIONAL COMPONENTS ARE STATELESS COMPONENTS
// CLASS COMPONENTS ARE STATEFUL COMPONENTS
// FUNCTIONAL COMPONENTS ARE PREFERRED OVER CLASS COMPONENTS
// PROPS ARE USED TO PASS DATA FROM PARENT TO CHILD COMPONENTS
// PROPS ARE READ ONLY
//
/**
 * Props:
//  * @property {any} [propName] 
//  * 
//  */
// class ParentComponent extends Component {
//     render() {
//         return (
//             <h1>
//                 i am the parent component
//                 <ChildComponent name="child component" />
//             </h1>
//         );
//     }
// }
// const ChildComponent = (props) => {
//     return <p>i am the last child</p>;
// };

/* <ChildComponent someAttribute={value} anotherAttribute={value} />

<ChildComponent text="I am the first child" /> */

// const ChildComponent = (props) => {
//     return <p>{props.text}</p>;
// };

// class ParentComponent extends Component {
//     render() {
//         return (
//             <h1>
//                 i am the parent component
//                 <ChildComponent text="1st child component" />
//                 <ChildComponent text="2nd child component" />
//                 <ChildComponent text="3rd child component" />
//             </h1>
//         );
//     }
// }