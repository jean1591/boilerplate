import { buttonHoverTransition } from './constants'
import { classNames } from '@/utils/classNames'

export const ButtonParameterLight = ({
  label,
  onClickHandler,
  selected,
}: {
  label: string
  onClickHandler: () => void
  selected: boolean
}) => {
  return (
    <button
      onClick={onClickHandler}
      className={classNames(
        buttonHoverTransition,
        selected
          ? 'border-blue-500 bg-blue-50 text-blue-800'
          : 'border-slate-300 bg-slate-50 text-slate-700',
        'rounded-lg border-2 px-4 py-2 text-sm font-medium capitalize'
      )}
    >
      {label}
    </button>
  )
}
