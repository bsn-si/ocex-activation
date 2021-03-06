import { BalanceGrade, fmtBalance } from "ocex-api"
import cx from "clsx"

import { EnrichedAccount } from "../../models"
import "./Account.css"

interface Props extends EnrichedAccount {
  onClick?: (account: EnrichedAccount) => void
  disabled?: boolean
  className?: string
  active?: boolean
}

export function Account({ active, onClick, className, disabled, ...account }: Props) {
  const { balance, meta, address } = account

  const itemProps = {
    className: cx("account", className, { active, disabled }),
    onClick: () => !disabled && onClick?.(account),
  }

  return (
    <div {...itemProps}>
      <div className="side">
        <div className="name">{meta.name || "<unnamed>"}</div>
        <div className="address">{address}</div>
      </div>
      <div className="balance">
        {fmtBalance(balance, BalanceGrade.Unit).toString()} Unit
      </div>
    </div>
  )
}
