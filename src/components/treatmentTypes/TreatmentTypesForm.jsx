export const TreatmentTypesForm = ({handleSubmit, handleChange, values, isPending}) => {
    return (
         <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name: </label>
        <input type="text" name="name" id="name" value={values.name} onChange={handleChange}/>
      </div>
      <div>
        <label htmlFor="duration">Duration: </label>
        <input type="text" name="duration" id="duration" value={values.duration} onChange={handleChange}/>
      </div>
     <div>
        <label htmlFor="price">Price: </label>
        <input type="text" name="price" id="price" value={values.price} onChange={handleChange}/>
      </div>
      <button type="submit" disabled={isPending}>Save</button>
    </form>
    )
}