/*
Presentational components:
    Are concerned with how things look.
    May contain both presentational and container components ** inside, and usually have some DOM markup and styles of their own.
    Often allow containment via this.props.children.
    Have no dependencies on the rest of the app, such as Flux actions or stores.
    Don’t specify how the data is loaded or mutated.
    Receive data and callbacks exclusively via props.
    Rarely have their own state(when they do, it’s UI state rather than data).
    Are written as functional components unless they need state, lifecycle hooks, or performance optimizations.
    Examples: Page, Sidebar, Story, UserInfo, List.

    in other words: are components that only show information given props and are usually functional components.
*/

/*
Container components:
    Are concerned with how things work.
    May contain both presentational and container components** inside but usually don’t have any DOM markup of their own except for some wrapping divs, and never have any styles.
    Provide the data and behavior to presentational or other container components.
    Call Flux actions and provide these as callbacks to the presentational components.
    Are often stateful, as they tend to serve as data sources.
    Are usually generated using higher order components such as connect() from React Redux, createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.
    Examples: UserPage, FollowersSidebar, StoryContainer, FollowedUserList.

    in other words: !(presentational components)
*/

// Example: 
// Also an example of statefull component

class Container extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            item: '',
            data: []
        }
        this.add.bind(this)
        this.onChange.bind(this)
    }

    add () {
        const { data: dataArray } = this.state
        const data = { data: dataArray.concat([item]) }
        const item = { item: '' }
        this.setState(state => Object.assign(data, item))
    }

    onChange ({ target: { value: item }}) {
        this.setState(state => Object.assign(state, { item }))
    }

    render () {
        const { item } = this.state
        return (
            <Presentational
                value={item}
                onChange={this.onChange}
                onClick={this.add}/>
        )
    }
}


// Presentational
// Also an example of stateless functional component

const Presentational = ({ props }) => {
    const { item, onChange, add } = props
    return (
        <div>
            <input
                value={item}
                onChange={onChange} />
            <button
                onClick={add}>
                add
                </button>
        </div>
    )
}


