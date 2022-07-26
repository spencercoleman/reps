import styled from "styled-components/macro";

const StyledSection = styled.section`
    margin: 0 auto;
    margin-bottom: var(--spacing-lg);

    .section-heading {
        margin-right: auto;
    }

    .section-top {
        margin-bottom: var(--spacing-lg);
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        gap: var(--spacing-sm);
    }

    .section-view-all {
        font-weight: 700;
        color: var(--black);
        border: 2px solid var(--black);
        border-radius: var(--border-radius-subtle);
        padding: 0.2rem var(--spacing-sm);

        &:hover, &:focus {
            background-color: var(--black);
            color: var(--white);
            text-decoration: none;
        }
    }
`;

export default StyledSection;