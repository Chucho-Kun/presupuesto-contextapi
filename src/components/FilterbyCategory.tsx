import { categories } from "../data/categories";
import { useBudget } from "../hooks/useBudget";

export default function FilterbyCategory() {

const { dispatch } = useBudget()

const handleChange = ( e : React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({ type: 'add-filter-category' , payload: { id: e.target.value}})
}

  return (
    <div className="bg-white shadow-lg p-10 rounded-lg">
        <form>
            <div className="flex flex-col md:flex-row md:items-center gap-5">
                <label htmlFor="category">Filtrar Gastos</label>
                    <select 
                        id="category"
                        className="bg-slate-100 p-3 flex-1 rounded-lg cursor-pointer"
                        onChange={handleChange}
                    >
                        <option value="">-- Seleccione una categoria</option>
                        { categories.map( category => (

                            <option 
                                key={category.id}
                                value={category.id}>
                                {category.name}
                            </option>

                        ) ) }
                    </select>
            </div>
        </form>
    </div>
  )
}
