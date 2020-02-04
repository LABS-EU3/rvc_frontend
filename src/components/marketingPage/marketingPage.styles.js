import styles from 'styled-components';

export const StyledDiv = styles.div`
.header {
    margin-top: 9rem;
    font-size: 2.8rem;
}
display: flex;
flex-direction: column; 
align-items: center;

.banner-image-section {
    height: 40rem;
    width: 55.8rem;
    background: #FFF9F5;
    transform: rotate(-5deg);
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    .banner-image {
        width: 52%;
        height: 65%;
        background-color: white;
        margin: auto;
        transform: rotate(5deg);
        img {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
        }
    }
}

.button-section {
    padding: 4rem;
    button {
        width: 169px;
        height: 34px;
        background: #F7F4F3;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 8px;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        line-height: 30px;
        text-align: center;
        color: #EA2727;
    }
}

.section-heading {
    // background-color: red;
    transform: rotate(-5deg)
    h1 {
        font-size: 2.4rem;
    }
    
}

section {
    margin: 3rem 0 0   0;
    background-color: #FFF9F5;
    article {
        padding-top: 5rem;
        h2 {
            font-size: 2.8rem;
        }
        p {
            line-height: 3.5rem;
            text-align: center;
            padding: 3rem;
            font-size: 2.2rem;
        }
    } 
}

footer {
    width: 100%
    text-align: left;
    padding: 4rem 0 4rem 1rem;
    background: rgba(10, 179, 138, 0.08);
    p {
        font-size: 1.2rem;
        position: fixed;
        bottom: 5px;
        left: 98px;
    }
}
`