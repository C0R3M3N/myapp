import { Card } from "./Card";
import { contact } from "../data";
export function CardHolder() {

    const dada = contact.map(e =>{
        return (
            <Card 
                key={e.id}
                {...e}
            />
        )
    })
    return(
        <div className="card--holder">
            {dada}
        </div>
    )
}