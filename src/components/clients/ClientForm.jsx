export const ClientForm = ({handleSubmit, handleChange, values, isPending}) => {
    return (
         <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First name: </label>
        <input type="text" name="firstName" id="firstName" value={values.firstName} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="lastName">Last name: </label>
        <input type="text" name="lastName" id="lastName" value={values.lastName} onChange={handleChange}/>
      </div>
     <div>
        <label htmlFor="phone">Phone number: </label>
        <input type="text" name="phone" id="phone" value={values.phone} onChange={handleChange}/>
      </div>
      <button type="submit" disabled={isPending}>Save</button>
    </form>
    )
}