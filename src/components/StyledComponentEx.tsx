import styled from 'styled-components';


export default function StyledComponentEx() {
    return (
        <div>
            <StyledPEx>Not Found</StyledPEx>
        </div>
    );
}

const StyledPEx = styled.p`
    color: pink;
`;