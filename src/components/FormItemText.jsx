function FormItemText(props) {
    return (
        <div className="flex flex-row bg-gray-300 rounded-xl px-3 my-2 border-2 border-transparent focus-within:border-blue-600">
            <div className="py-3 px-2">
                {props.icon}
            </div>
            <input className="bg-gray-300 px-2 block w-60 focus:outline-none" type={props.type} name={props.name} id={props.name} placeholder={props.placeholder} />
        </div>
    )
}

export default FormItemText
