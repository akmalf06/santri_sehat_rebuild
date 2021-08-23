function DropDownItem(props) {
    return (
        <a href={props.routeTo} className="block text-lg text-center py-2 px-4 hover:text-green-200">{props.name}</a>
    )
}

export default DropDownItem
