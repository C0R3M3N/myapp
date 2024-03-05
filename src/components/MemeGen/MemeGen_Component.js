import { Header } from "./Header";
import { Meme } from "./Meme";
import { Side } from "./sideChalenge";

export function MemeGenComponent() {
    return(
        <div className="Meme--main">
            <Header/>
            <Meme/>
            <Side/>
        </div>
    )
}