# Key advantages

- Provides type checking
- Prevents uncaught runtime errors (adding to string for ex)
- Provides suggestions and info about what a field has to be

# React TypeScript CheatSheat

## Common used types:

### Basic Types

- message: string;
- counter: number;
- disabled: boolean;
- list: [];
- typeList: string[]; //array of string
- person: { name: string; age: number;} //object with any number of properties
- personList: {name: string}[] //array of objects
- onClick: () => void; //function that doesn't take any params and returns
  nothing
- onChange: (id:number) => void;
- onClick(event: React.MouseEvent<HTMLButtonElement>): void;
- optional?: TypeGoesHere //an optional prop

### Component Props

- children: React.ReactNode; // best, accepts everything (see edge case below)
- style?: React.CSSProperties; // to pass through style props
- onChange?: React.FormEventHandler<HTMLInputElement>; // form events! the
  generic parameter is the type of event.target

### Type or Interface

Here's a helpful rule of thumb:

- always use interface for public API's definition when authoring a library or
  3rd party ambient type definitions, as this allows a consumer to extend them
  via declaration merging if some definitions are missing.
- consider using type for your React Component Props and State, for consistency
  and because it is more constrained.

### Function Components

type AppProps = { message: string }; const App = ({ message }: AppProps) =>

<div>{message}</div>;
const App:React.FC<AppProps>
React.FC mostly covers everything but breaks default props if needed

## Hooks

### useState

const [val, toggle] = React.useState(false); //type is inferred and will be
boolean const [user, setUser] = React.useState<IUser | null>(null); // when
declaring state null

### useRef

const ref1 = useRef<HTMLElement>(null!); //The first option will make
ref1.current read-only, and is intended to be passed in to built-in ref
attributes that React will manage (because React handles setting the current
value for you). const ref2 = useRef<HTMLElement | null>(null); //The second
option will make ref2.current mutable, and is intended for "instance variables"
that you manage yourself.

### customHooks

return [isLoading, load] as const; // infers [boolean, typeof load] instead of
(boolean | typeof load)[]. This way, when you destructure you actually get the
right types based on destructure position. Or a tuple can be used

## Class components

type MyProps = { message: string; }; type MyState = { count: number; // like
this }; class App extends React.Component<MyProps, MyState> { state: MyState = {
// optional second annotation for better type inference count: 0, };

### Forms and events

## inline handlers

event will be correctly typed automatically!

## separte event handlers

// typing on RIGHT hand side of = onChange = (e:
React.FormEvent<HTMLInputElement>): void => { this.setState({ text:
e.currentTarget.value }); };

// typing on LEFT hand side of = onChange:
React.ChangeEventHandler<HTMLInputElement>

### Context

interface AppContextInterface { name: string; author: string; url: string; }

const AppCtx = React.createContext<AppContextInterface | null>(null); //
Provider in your app

const sampleAppContext: AppContextInterface = { name: "Using React Context in a
Typescript App", author: "thehappybug", url: "http://www.example.com", };

export const App = () => ( <AppCtx.Provider
value={sampleAppContext}>...</AppCtx.Provider> );

// Consume in your app

export const PostInfo = () => { const appContext = React.useContext(AppCtx);
return ( <div> Name: {appContext.name}, Author: {appContext.author}, Url:{" "}
{appContext.url} </div> ); };

### Refs

## createRef

private rootRef = React.createRef<HTMLDivElement>(); // like this

## forwardRef

type Props = { children: React.ReactNode; type: "submit" | "button" }; export
type Ref = HTMLButtonElement; export const FancyButton = React.forwardRef<Ref,
Props>((props, ref) => (
<button ref={ref} className="MyClassName" type={props.type}> {props.children}
</button> ));
#   t o d o l i s t - r e a c t - t y p e s c r i p t - f i r e b a s e  
 