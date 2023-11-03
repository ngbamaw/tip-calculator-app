import styled from "styled-components";

const StyledTipCalculator = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
    background-color: hsl(185, 41%, 84%);
    font-family: "Space Mono", monospace;
    #tip-calculator {
        display: flex;
        width: 50%;
        min-width: 700px;
        background-color: white;
        padding: 24px;
        font-weight: 700;
        border-radius: 24px;
        .tip-input-container {
            margin-bottom: 24px;
            label,
            h2 {
                color: hsl(184, 14%, 56%);
                font-size: 12px;
            }
            .tip-selection-group {
                display: grid;
                grid-template-columns: repeat(3, 1fr);
                grid-template-rows: repeat(2, 35px);
                grid-gap: 8px;
                button,
                input {
                    border: none;
                    font-family: inherit;
                    font-weight: 700;
                    font-size: 20px;
                }

                .tip-selection {
                    color: white;
                    background-color: hsl(183, 100%, 15%);
                    border-radius: 4px;
                }
                .tip-selection.selected {
                    background-color: hsl(172, 67%, 45%);
                    color: hsl(183, 100%, 15%);
                }
                input {
                    width: 100%;
                    text-align: center;
                    color: hsl(183, 100%, 15%);
                    &::placeholder {
                        color: hsl(184, 14%, 56%);
                    }
                }
            }
            .tip-input {
                display: flex;
                background-color: hsl(189, 41%, 97%);
                padding: 5px;
                align-items: center;
                input {
                    background-color: transparent;
                    border: none;
                    text-align: right;
                    margin-left: auto;
                    outline: none;
                    font-family: inherit;
                    font-weight: 700;
                    font-size: 18px;
                    color: hsl(183, 100%, 15%);
                }
            }
            .tip-choice {
                background-color: hsl(183, 100%, 15%);
                color: white;
            }
        }

        #input-section {
            width: 50%;
            margin-right: 48px;
        }
        #result-section {
            width: 50%;
            height: 100%;
            background-color: hsl(183, 100%, 15%);
            padding: 24px;
            display: flex;
            flex-direction: column;
            border-radius: 12px;
            .tip-line {
                display: flex;
                align-items: center;
                margin-bottom: 24px;
                .label {
                    .name {
                        font-size: 14px;
                        color: white;
                    }
                    .person {
                        font-size: 12px;
                        color: hsl(186, 14%, 43%);
                    }
                }
                .price {
                    margin-left: auto;
                    font-size: 36px;
                    color: hsl(172, 67%, 45%);
                }
            }
            #btn-reset {
                margin-top: auto;
                border: none;
                width: 100%;
                display: block;
                background-color: hsl(172, 67%, 45%);
                color: hsl(183, 100%, 15%);
                font-weight: 700;
                font-size: 14px;
                padding: 8px 0;
                border-radius: 4px;
                &:disabled {
                    opacity: 0.3;
                }
            }
        }
    }

    @media (max-width: 768px) {
        justify-content: flex-start;
        align-items: center;
        #tip-calculator {
            flex-direction: column;
            margin-top: auto;
            width: 100%;
            min-width: auto;
            border-bottom-left-radius: 0;
            border-bottom-right-radius: 0;
            #input-section {
                width: 100%;
                margin-right: 0;
                .tip-selection-group {
                    display: grid;
                    grid-template-columns: repeat(2, 1fr);
                    grid-template-rows: repeat(3, 40px);
                    grid-gap: 8px;
                }
            }
            #result-section {
                width: 100%;
                margin-right: 0;
            }
        }
    }
`;

export default StyledTipCalculator;
