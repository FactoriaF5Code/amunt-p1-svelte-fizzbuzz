import '@testing-library/jest-dom'
import {render, screen} from "@testing-library/svelte";
import Card from "../lib/Card.svelte";


test('Shows the number', () => {
    render(Card, {number: 1})

    expect(screen.getByText("1"))
        .toBeInTheDocument()
    expect(screen.queryByText("Fizz"))
        .not.toBeInTheDocument()
    expect(screen.queryByText("Buzz"))
        .not.toBeInTheDocument()
})

test('Shows the number', () => {
    render(Card, {number: 1})

    expect(screen.getByText("1"))
        .toBeInTheDocument()
    expect(screen.queryByText("Fizz"))
        .not.toBeInTheDocument()
    expect(screen.queryByText("Buzz"))
        .not.toBeInTheDocument()
})