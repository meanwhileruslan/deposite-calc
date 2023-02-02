// import { useEffect } from "react";
import { useEffect, useState } from "react";


const Calc = () => {

    const [money, SetMoney] = useState("100000");
    const [persent, SetPersent] = useState("5");
    const [year, SetYear] = useState("3");

    const [overpayment, SetOverpayment] = useState(null);
    const [all_rate, SetAll_Rate] = useState(null);
    const [total_payments, SetTotal_Payments] = useState(null);
    const [monthly_payment, SetMonthly_Payment] = useState(null);

    const [monthly_rate, SetMonthly_Rate] = useState();

    const deposit = () => {
        const i_money = money;
        const i_persent = persent;
        const i_year = year;
        // -----------------------------------------------
        const p_money = parseFloat(i_money);
        const p_persent = parseFloat(i_persent);
        const p_year = parseFloat(i_year);
        // -----------------------------------------------
        const monthly_rate = p_persent / 12 / 100;
        SetMonthly_Rate(monthly_rate);
        console.log("month", monthly_rate);
        // -----------------------------------------------
        const all_rate = (1 + monthly_rate) ** (p_year * 12);
        SetAll_Rate(all_rate);
        console.log("all_rate", all_rate);
        // -----------------------------------------------
        const monthly_payment = p_money * monthly_rate * all_rate / (all_rate - 1);
        SetMonthly_Payment(monthly_payment);
        console.log("monthly_payment", monthly_payment);
        // -----------------------------------------------
        const overpayment = monthly_payment * (p_year * 12) - p_money;
        SetOverpayment(overpayment);
        console.log("overpayment", overpayment);
        // -----------------------------------------------
        const total_payments = p_money + overpayment;
        SetTotal_Payments(total_payments);
        console.log("total_payments", total_payments);
    }
    useEffect(() => {
        deposit();
    }, [])
    return (
        <>
            <div className="container-fluid wrapper_calc">
                <div className="calc_section">
                    <div className="input-group">
                        <input
                            className="form-control m-2"
                            type="text"
                            id="summ"
                            onChange={(s) => { SetMoney(s.target.value) }}
                            placeholder="Сумма вложений"
                            defaultValue={100000} />
                        <input
                            className="form-control m-2"
                            type="text"
                            id="persent"
                            onChange={(p) => { SetPersent(p.target.value) }}
                            placeholder="Процентная ставка"
                            defaultValue={5} />
                        <input
                            className="form-control m-2"
                            type="text"
                            id="year"
                            onChange={(y) => { SetYear(y.target.value) }}
                            placeholder="Срок"
                            defaultValue={3} />
                    </div>
                    <button onClick={deposit} className="btn_click btn m-2">РAСЧИТАТЬ</button>
                    <hr />
                    <div className="view_section d-flex justify-content-center">
                        <span className="span_text m-4 align-items-center" style={{ color: "gray", borderRight: "1px solid gray", borderLeft: "1px solid gray", padding: "15px" }}>
                            Всего выплат:
                            <h3 style={{ fontWeight: "bold" }}>
                                {total_payments != null
                                    ? total_payments.toLocaleString()
                                    : <></>} сом
                            </h3>
                        </span>
                        <span className="span_text m-4 align-items-center" style={{ color: "gray", borderRight: "1px solid gray", padding: "15px", }}>
                            Полная стоимость кредита:
                            <h3 style={{ fontWeight: "bold" }}>
                                {all_rate != null
                                    ? all_rate.toLocaleString()
                                    : <></>} %
                            </h3>
                        </span>
                        <span className="span_text m-4 align-items-center" style={{ color: "gray", borderRight: "1px solid gray", padding: "15px", }}>
                            Переплата:
                            <h3 style={{ fontWeight: "bold" }}>
                                {overpayment != null
                                    ? overpayment.toLocaleString()
                                    : <></>} сом
                            </h3>
                        </span>
                        <span className="span_text m-4 align-items-center" style={{ color: "gray", borderRight: "1px solid gray", padding: "15px", }}>
                            Эжемесячный оплата:
                            <h3 style={{ fontWeight: "bold" }}>
                                {monthly_payment != null
                                    ? monthly_payment.toLocaleString()
                                    : <></>} сом
                            </h3>
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Calc;