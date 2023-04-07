import React from "react";
import styled from "@emotion/styled"
import "../../Assests/globalStyles.css"

export default function WrongURL({ text = "Go Back!", currentTheme }) {
    return < div className="paddingTop10rem">
        <iframe src="https://giphy.com/embed/IbUiwNyB6sJXIknmA6" width="480" height="300" frameBorder="0" class="giphy-embed" allowFullScreen></iframe>
        <p style={{ color: currentTheme.fonts.special.color }} className="noMarginBottom paddingBottom1rem">{text}</p>
    </div>
}