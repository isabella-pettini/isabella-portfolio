import React from "react";
import NavTabs from "./NavTabs";

export default function Header({ currentPage, handlePageChange }) {
    return (
        <header>
        <h1>Isabella Pettini</h1>
        <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />
        </header>
    )
}