import { EyeIcon } from "../../../components/icons/EyeIcon";

export function Accounts() {
  return (
    <div className="bg-teal-900 rounded-2xl w-full h-full md:p-10 px-4 py-8">
      <div>
        <span className="tracking-[-0.5px] text-white block">Saldo total</span>

        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px] text-white">
            R$ 1000,00
          </strong>
          <button className="bg-red-500 w-12 h-12">
            <EyeIcon open />
          </button>
        </div>
      </div>
    </div>
  )
}

// Dashboard layout e slider de bank accounts - 32:51
