
li {
    display: flex;
    display: block;
    flex-direction: column;
    justify-content: center;
    box-sizing: border-box;
    &:hover {
        svg {
            display: none;
        }
        .options {
            display: flex;
            justify-content: center;
            margin-bottom: 0.83em;
            margin-top: 0.83em;
        }
    }
}

li::after {
    position: absolute;
    content: "";
    background-color: rgba(90, 84, 84, 0.8);
    border-radius: 50%;
    z-index: -1;
    left: -50%;
    right: -50%;
    top: -150%;
    bottom: -150%;
    transform: scale(0.0, 0.0);
    transition: ease-out 0.5s all;
    
}
li:hover::after {
    border-radius: 0%;
    transform: scale(0.5, 0.5);
}

