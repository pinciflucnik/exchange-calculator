import {
    useEffect,
    useState
} from "react";

export default function useCalc(initialValues) {
    const [total, setTotal] = useState(0);
    const [paidBGN, setPaidBGN] = useState(0);
    const [result, setResult] = useState(undefined);
    const [isNegative, setNegative] = useState(false)

    const calculate = (total, paidBGN) => {
        setResult(0);
        if(total !== 0 && paidBGN !== 0){
            const currentResult = Number((paidBGN / 1.95583).toFixed(2)) - total
            setResult(Number(currentResult.toFixed(2)));
        }
    }

    const onChange = (e) => {
        if (e.target.name === "total") {
            setTotal(e.target.value)
        } else if (e.target.name === "paidBGN") {
            setPaidBGN(e.target.value)
        }


    };
    useEffect(() => {
        console.log(result);
        calculate(Number(total), Number(paidBGN))
    }, [total, paidBGN])
    useEffect(() => {
        if(result >= 0){
            setNegative(false)
        } else {
            setNegative(true)
        }
    },[result])

    return {
        total,
        paidBGN,
        result,
        isNegative,
        onChange,
    }
}