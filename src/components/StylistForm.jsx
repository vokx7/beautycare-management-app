export const StylistForm = ({handleSubmit, handleChange, values, isPending}) => {
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
        <label htmlFor="specialty">Specialty: </label>
        <select name="specialty" value={values.specialty} onChange={handleChange}>
          <option value="manicure">manicure</option>
          <option value="cosmetology">cosmetology</option>
          <option value="hairdressing">hairdressing</option>
        </select>
      </div>
      <button type="submit" disabled={isPending}>Save</button>
    </form>
    )
}