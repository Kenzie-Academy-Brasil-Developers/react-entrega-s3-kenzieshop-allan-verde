import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :root {
        --white:#FFF;
        --black:#000;
        --red:#c53030;
        --blue:#403CAA;
        --green:#11995E;
        --grey-100:#333;
        --grey-50:#999;
        --grey-0:#F5F5F5;
    }
    body {
        width: 100vw;
        background-color: var(--grey-0);
        color: var(--black)
    }
    .containerMenu {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`