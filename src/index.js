import { convertToRupiah, pph21 } from "./utils"
import css from "./style.css"

if (document != null) {
    const inputSalary = document.getElementById("salary")
    const calculate = document.getElementById("calculate")

    calculate.addEventListener("click", () => {
        const salary = inputSalary.value
        alert(`Gaji pertahun ${convertToRupiah(salary)} -> Pajak ${convertToRupiah(pph21(salary).resultTax)}`)
    })
}