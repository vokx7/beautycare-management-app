export const StylistInfo = ({stylist}) => {
    return (
         <li>
            {stylist.firstName} {stylist.lastName} - {stylist.specialty}
          </li>
    )
}