import styles from 'styled-components';

export const MainDiv = styles.div`
background:#0AB28A;
`

export const StyledDiv = styles.div`
.menu-container {
    display: flex;
    width: 100%;
    align-items: center;
    align-content: flex-end;
    background:#0AB28A;
    margin-top: 0rem;
    padding: 2rem;
    justify-content: space-between;
}

.logo {
    font-size:15px;
}

.subMenu {
    display:flex;
    justify-content:space-between;
    margin-right: 5px;
    font-size: 10px;
}

.text1 {
    margin-right: 15px;
    font-size: 8px;  
}

.header {
<<<<<<< HEAD
    margin-top: 9rem;
    font-size: 36px;
    line-height: 45px;
    background:#0AB28A;
=======
    margin-top: 6rem;
    font-size: 3.8rem;
>>>>>>> 2cda90e3761eff61a5c04f711d8d8f75c92bd331
}
display: flex;
flex-direction: column; 
align-items: center;
background:#0AB28A;
.banner-image-section {
    // height: 40rem;
    width: 100%;
    // width: 80%
    margin: auto;
    background:#0AB28A;
    // transform: rotate(-5deg);
    margin: 1rem 0;
    display: flex;
    flex-direction: column;
    .banner-image {
        margin: 5rem auto;
        width: 65%;
        height: 60%;
        background-color: white;
        // transform: rotate(5deg);
        img {
            width: 100%;
            height: 100%;
            border-radius: 1rem;
        }
    }
}

.carousel .slide {
    background: inherit;
}

.carousel .control-dots .dot {
    width: 15px;
    height: 15px;
}

.carousel-status {
    display: none;
}

.carousel .slider-wrapper.axis-horizontal .slider {
    margin-bottom: 12rem;
}

.carousel.carousel-slider {
    // transform: rotate(5deg)
}

.recipe-card {
    display: flex;
    flex-direction: column;
    width: 283px;
    background: white;
    margin: auto;
    border-radius: 13px;
    text-align: left;
    padding-left: 32px;
    position: relative;
    bottom: 15rem;   
    font-size: 1.5rem;
    // transform: rotate(5deg);
    h2 {
        font-weight: bolder;
        font-size: 2.2rem;
        letter-spacing: 1.2px
    }
    span {
        margin-right: 10px;
    }
    .time-taken {
        color: red;
    }
}

.button-section {
    margin-bottom: 4rem;
    button {
        width: 169px;
        height: 4.8rem;
        background: #F7F4F3;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 0.8rem;
        font-family: Roboto;
        font-style: normal;
        font-weight: bold;
        font-size: 2rem;
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
    background-color: white;
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
        .number-images {
            width: 100%;
            display: inline;
            img {
                width: 40%;
            }
        }
    } 
}

footer {
    width: 100%
    text-align: left;
    padding: 2rem 0 0 1rem;
    background: rgba(10, 179, 138, 0.08);
    font-size: 1.6rem;
    p {
        font-size: 1.6rem;
        margin-top: 2rem;
        margin-bottom: 1rem;
        text-align: center;
    }
}
`