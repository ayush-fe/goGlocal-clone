import React from "react";
import styled from "@emotion/styled"
import "../../Assests/globalStyles.css"

export default function WIP({ text = "Hold on, I'm still building this for you!", currentTheme }) {
    return < div className="paddingTop10rem">
        <iframe src="https://giphy.com/embed/IhD0s2ryLXW9V6k6DX" width="480" height="270" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p style={{ color: currentTheme.fonts.special.color }} className="noMarginBottom paddingBottom1rem">{text}</p>
    </div>
}