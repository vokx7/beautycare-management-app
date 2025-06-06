import { ClientsPanel } from "./clients/ClientsPanel"
import { StylistsPanel } from "./stylists/StylistsPanel"
import { TreatmentsPanel } from "./treatments/TreatmentsPanel"
import { TreatmentTypesPanel } from "./treatmentTypes/TreatmentTypesPanel"

export const Main = () => {
    return <div>
        <h1>BeautyCare Management App!</h1>
        <StylistsPanel/>
        <hr/>
        <ClientsPanel/>
        <hr/>
        <TreatmentTypesPanel/>
        <hr/>
        <TreatmentsPanel/>
    </div>
}