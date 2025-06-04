import { useDeleteStylistsMutation } from "../../queries/useDeleteStylistsMutation"

export const DeleteStylistConfirmation = ({onCancel, stylist}) => {
    const {mutate, isPending} = useDeleteStylistsMutation(stylist.id);

    if(isPending) return <p>Loading...</p>

    return (
        <div>
            <p>Do you really want to delete this stylist? <strong>{`${stylist.firstName} ${stylist.lastName}`} </strong></p>
            <button onClick={() => mutate()}>Delete</button>
            <button onClick={onCancel}>Cancel</button>
        </div>
    )
}