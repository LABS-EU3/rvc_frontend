import styles from 'styled-components';

export const StyledDiv = styles.div`
.header {
    margin-top: 9rem;
    font-size: 3.8rem;
}
display: flex;
flex-direction: column; 
align-items: center;

.banner-image-section {
    // height: 40rem;
    width: 400px;
    // width: 80%
    margin: auto;

    background: #FFF9F5;
    // transform: rotate(-5deg);
    margin: 5rem 0;
    display: flex;
    flex-direction: column;
    .banner-image {
        margin: 5rem auto;
        width: 45%;
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
    margin-bottom: 9rem;
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
    padding: 4rem 0 0 1rem;
    background: rgba(10, 179, 138, 0.08);
    font-size: 1.6rem;
    p {
        font-size: 1.6rem;
        margin-top: 5rem;
        margin-bottom: 0;
        text-align: center;
    }
}
`