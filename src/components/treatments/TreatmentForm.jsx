export const TreatmentForm = ({handleSubmit, handleChange, values, isPending, stylists,
  clients,
  treatmentTypes,}) => {
    return (
         <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="treatmentTypeId">Treatment type: </label>
        <select name="treatmentTypeId" value={values.treatmentTypeId} onChange={handleChange}>
          {treatmentTypes.map((type) => (
            <option key={type.id} value={type.id}>
              {type.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="stylistId">Stylist: </label>
        <select name="stylistId" value={values.stylistId} onChange={handleChange}>
          {stylists.map((stylist) => (
            <option key={stylist.id} value={stylist.id}>
              {`${stylist.firstName} ${stylist.lastName}`} 
            </option>
          ))}
        </select>
      </div>
       <div>
        <label htmlFor="clientId">Client: </label>
        <select name="clientId" value={values.clientId} onChange={handleChange}>
          {clients.map((client) => (
            <option key={client.id} value={client.id}>
              {`${client.firstName} ${client.lastName}`} 
            </option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="date">Date:</label>
        <input
          type="date"
          name="date"
          value={values.date}
          onChange={handleChange}
        />
      </div>
      <button type="submit" disabled={isPending}>Save</button>
    </form>
    )
}