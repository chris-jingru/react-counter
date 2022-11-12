function Counter ({count, countUp, countDown}){
    return(
    <section className="counter">
        <button className="counterBtnUp button" onClick={countUp}>+</button>
        <div className="numberDisplay">{count}</div>

        <button className="counterBtnDown button" onClick={countDown}>-</button>
    </section>

    )
}

export default Counter