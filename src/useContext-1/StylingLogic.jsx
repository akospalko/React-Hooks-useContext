//apply different color theme on different elements 
export function StylingLogic (colorPair, darkTheme) {

    switch(colorPair) {
        case "blackWhite":
        return {
            border: darkTheme ? "2px solid white" : "2px solid black",
            backgroundColor: darkTheme ? "#000" : "#fff",
            color: darkTheme ? "#fff" : "#000"
        }
        break;
        case "greenYellow":
        return {
            border: darkTheme ? "2px solid yellow" : "2px solid green",
            backgroundColor: darkTheme ? "green" : "yellow",
            color: darkTheme ? "yellow" : "green"
        }
        break;
        default: return {}
    }
}
