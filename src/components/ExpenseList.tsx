import { useMemo } from "react"
import { useBudget } from "../hooks/useBudget"
import ExpenseDetail from "./ExpenseDetail"

export default function ExpenseList() {
  
    const { state } = useBudget()
    const filteredExpenses = state.currentCategory ? state.expenses.filter( expense => expense.category === state.currentCategory ) : state.expenses
    const isEmpty = useMemo( () => filteredExpenses.length === 0 ,[ filteredExpenses ])

    return (
        <div className="mt-10 shadow-lg p-10 rounded-lg bg-white">
            { isEmpty ? <p className="text-gray-600 text-2xl font-bold">No hay gastos</p> : (
                <>
                    <p className="text-gray-600 text-2xl font-bold my-5">Listado de gastos</p>
                        
                    { filteredExpenses.map( expense => (
                        <ExpenseDetail 
                            key={expense.id}
                            expense={expense}
                        />
                    ) ) }
                
                </>
            ) }
        </div>
  )
}
