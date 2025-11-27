import useCalc from "./hooks/useCalc"

export default function Calculator() {
    const { onChange, result } = useCalc({ total: 0, paidBGN: 0 })

    return (
        <>
            <div className="calc-wrapper">
                <form action="">
                    <label htmlFor="total">Стойност в EUR</label>
                    <input type="number" id="total" name="total" onChange={onChange}></input>
                    <label htmlFor="paidBGN">Платени в BGN</label>
                    <input type="number" id="paidBGN" name="paidBGN" onChange={onChange}></input>
                </form>
            </div>
            <div className="result-wrapper">
                <h3>{result}</h3>
            </div>
        </>
    )
}