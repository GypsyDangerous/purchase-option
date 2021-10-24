import { useState } from "react";
import styled from "styled-components";

const Brand = styled.div`
    min-width: 32px;
    min-height: 32px;
    background: red;
`;

const BrandContainer = styled.div`

`

const Nav = styled.nav`
    padding: 1rem;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

export const Header = () => {
    const [showContent, setShowContent] = useState(true);

    return (
        <Nav>
            <div>
                <Brand></Brand>
            </div>
            {showContent && (
                <>
                    <ul></ul>
                    <button></button>
                </>
            )}
        </Nav>
    );
};
