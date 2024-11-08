const TextInput =({ type="text",label,placeholder="Enter your input here....",onChangeHandler}) =>{ //here type is a props
return(
    <div>
    <label>
        <span className="text-gray-700">{label}</span>
        </label>
        <input
        type={type}  //{type} is  a prop
        className="px-4 py-2 border border-gray-600 rounded-md w-full" //w-full mean 100% width of its parent width
        placeholder={placeholder} //{placeholder} is a prop
        onChange={onChangeHandler} //{onChangedHandler} is a prop
        />
    </div>
)
}
export default TextInput;
