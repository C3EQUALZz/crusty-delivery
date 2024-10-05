import "./AppDownload.css"
import {assets} from "../../assets/assets.ts";

export const AppDownload = () => {
    return (
        <div className="app-download" id="app-download">
            <p>For Better Experience Download <br /> Tomato App</p>
            <div className="app-download-platforms">
                <img src={assets.play_store} alt="Иконка Play Store"/>
                <img src={assets.app_store} alt="Иконка App Store"/>
            </div>
        </div>
    )
}