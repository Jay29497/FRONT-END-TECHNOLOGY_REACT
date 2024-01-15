import React, { Fragment } from "react";
import { styles } from "../object-style/style";
import StyledButton from "./Button/Button";

const StyledComponent = () => {
    return (
        <Fragment>
            <div style={styles.Container}>
            <h2 style={styles.Header}>6) STYLED COMPONENT</h2>
        </div>
        {/* <button>STYLED BUTTON-1</button> */}
        <StyledButton>Styled Button</StyledButton>
        <StyledButton variant = 'outline'>Styled Button</StyledButton>
        </Fragment>
    )
}

export default StyledComponent