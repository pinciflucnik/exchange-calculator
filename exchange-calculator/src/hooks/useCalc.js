import {
    useEffect,
    useState
} from "react";

export default function useCalc(initialValues) {
    const [total, setTotal] = useState(0);
    const [paidBGN, setPaidBGN] = useState(0);
    const [result, setResult] = useState(undefined);

    const calculate = (total, paidBGN) => {
        const currentResult = Number((paidBGN / 1.95583).toFixed(2)) - total
        setResult(Number(currentResult.toFixed()))
    }

    const onChange = (e) => {
        if (e.target.name === "total") {
            setTotal(e.target.value)
        } else if (e.target.name === "paidBGN") {
            setPaidBGN(e.target.value)
        }
        setResult(undefined);


    };
    useEffect(() => {
        console.log("I'm here");
        calculate(Number(total), Number(paidBGN))
    }, [total, paidBGN])

    return {
        total,
        paidBGN,
        result,
        onChange,
    }
}