import React from 'react'
import { Form, Row } from 'react-bootstrap'
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [query, setQuery] = useSearchParams();
    const search = query.get("search");

    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <>
            <Row>
                <Form className="d-flex" onSubmit={handleSubmit}>
                    <Form.Control
                        type="search"
                        value={search ?? ""}
                        autoFocus
                        placeholder="Busca tu menu..."
                        className="me-2"
                        aria-label="Search Menu"
                        onChange={(e) => {
                            const value = e.target.value;

                            setQuery({ search: value });
                            // navigate("/?search=" + value);
                        }}
                    />
                </Form>
            </Row>
        </>
    )
}

export default Search