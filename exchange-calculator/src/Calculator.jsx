import useCalc from "./hooks/useCalc"

export default function Calculator() {
    const { onChange, result, isNegative } = useCalc({ total: 0, paidBGN: 0 })

    return (
        <div className="inner-wrapper">
            <div className="calc-wrapper">
                <form action="">
                    <label htmlFor="total">Стойност в EUR</label>
                    <input type="number" id="total" name="total" min="0" onChange={onChange}></input>
                    <label htmlFor="paidBGN">Платени в BGN</label>
                    <input type="number" id="paidBGN" name="paidBGN" min="0" onChange={onChange}></input>
                </form>
            </div>
            <div className="result-wrapper">
                {result == 0 ? <></> : <>{isNegative ? <h3>За доплащане: {result * -1} EUR</h3> : <h3>Ресто: {result} EUR</h3>}</>}
            </div>
        </div>
    )
}