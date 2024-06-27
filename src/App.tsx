import GlobalStyles from "styles/global-styles";
import Button from "ui/Button";

import Heading from "ui/Heading";
import Row from "ui/Row";

export default function App() {
    return (
        <>
            <GlobalStyles />

            <Row type="horizontal">
                <Heading as="h1">The Wild Oasis</Heading>

                <div>
                    <Heading as="h2">Check in and out</Heading>
                    <Heading as="h3">Form</Heading>
                </div>
            </Row>

            <Button size="medium" variation="primary">
                Click me
            </Button>

            <Button size="small" variation="secondary">
                Click me
            </Button>
        </>
    );
}
