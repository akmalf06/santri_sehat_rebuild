function RoundSubmitButton(props) {
    return (
        <input className="text-lg font-bold w-40 py-3 rounded-full bg-gradient-to-br from-green-300 to-green-500 mt-7 active:bg-none active:bg-green-600" type="submit" value={props.value} />
    )
}

export default RoundSubmitButton
