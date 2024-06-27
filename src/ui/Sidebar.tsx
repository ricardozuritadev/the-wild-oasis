import styled from "styled-components";

const StyledSidebar = styled.aside`
    background-color: var(--color-grey-0);
    padding: 1.6rem 4.8rem;
    border-bottom: 1px solid var(--color-grey-100);
    grid-row: 1 / -1;
`;

export default function Sidebar() {
    return <StyledSidebar>SIDEBAR</StyledSidebar>;
}
