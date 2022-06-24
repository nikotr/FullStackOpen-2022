const DebugInfo = (props) => {
console.log(props.fields)
let index=0
    return (
        <div>
        {props.fields.map(field => <div key={"debug"+index++}>Debug {field}<br /></div>)}
        </div>
    )
}

export default DebugInfo