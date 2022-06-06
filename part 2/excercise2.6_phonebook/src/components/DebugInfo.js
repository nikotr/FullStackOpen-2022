const DebugInfo = (props) => {
console.log(props.fields)

    return (
        <div>
            <p>
        {props.fields.map(field => <>Debug {field}<br /></>)}
        </p>
        </div>
    )
}

export default DebugInfo