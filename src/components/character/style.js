import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    width: 580px;
    height: 240px;

    background-color: #3c3e44;
    box-shadow: 0px 4px 6px -1px rgba(0, 0, 0, 0.1),
    0px 2px 4px -1px rgba(0, 0, 0, 0.06);
    border-radius: 0 9px 9px 0;

    @media(max-width: 520px) {
            width: 220px;
            flex-direction: column;
            height: 480px;
        }

    img {
        width: 230px;
        border-radius: 9px 0 0 9px;

        @media(max-width: 520px) {
            width: 100%;
            border-radius: 9px 9px 0 0;
        }
    }
`

export const ContainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 12px;

    .title {
        font-weight: 800;
        font-size: 26px;
        line-height: 30px;
        color: #f5f5f5;

        &:hover {
            color: #ff9800;
        }
    }

    .status {
        font-weight: 500;
        font-size: 16px;
        line-height: 26px;
        color: #ffffff;
        text-transform: capitalize;

        span {
            display: inline-block;
            width: 9px;
            height: 9px;
            border-radius: 50%;
            margin-right: 6px;

            background-color: ${(props) => props.backgroundColor};
        }
    }

    .info {
        font-weight: 500;
        font-size: 15px;
        line-height: 20px;
        color: #9e9e9e;
    }

    .description {
        font-weight: 400;
        font-size: 17px;
        line-height: 26px;
        color: #f5f5f5;

        &:hover {
            color: #ff9800;
        }
    }


`