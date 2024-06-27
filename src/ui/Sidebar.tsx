import styled from "styled-components";
import Logo from "./Logo";
import MainNav from "./MainNav";

const StyledSidebar = styled.aside`
    display: flex;
    flex-direction: column;
    gap: 3.2rem;
    background-color: var(--color-grey-0);
    padding: 1.6rem 4.8rem;
    border-bottom: 1px solid var(--color-grey-100);
    grid-row: 1 / -1;
`;

export default function Sidebar() {
    return (
        <StyledSidebar>
            <Logo />
            <MainNav />
        </StyledSidebar>
    );
}
