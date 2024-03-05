
import { ObjectK } from "./Threejs/ObjectK";


export function Card(props) {
    return( 
        <section className="card--main">
            {props.available 
                ? <div className="badgeOn">Online</div> 
                : <div className="badgeOff">Offline</div>
            }
            {/* <img src={props.img} className="card--pic" alt="hpr"/> */}
            <ObjectK/>
            <span>Name:{props.name}</span><br/>
            <span>Phone:{props.phone}</span><br/>
            <span>Email:{props.email}</span><br/>
        </section>
    )
}