// Statefull component

class Container extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            item: '',
            data: []
        }
        this.add.bind(this)
        this.onChange.bind(this)
    }

    add() {
        const { data: dataArray } = this.state
        const data = { data: dataArray.concat([item]) }
        const item = { item: '' }
        this.setState(state => Object.assign(data, item))
    }

    onChange({ target: { value: item } }) {
        this.setState(state => Object.assign(state, { item }))
    }

    render() {
        const { item } = this.state
        return (
            <Presentational
                value={item}
                onChange={this.onChange}
                onClick={this.add} />
        )
    }
}


// Stateless functional component

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