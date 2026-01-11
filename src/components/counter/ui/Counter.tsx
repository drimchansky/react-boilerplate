import { useStore } from '@nanostores/react'

import { Button } from '@/shared/ui/Button'

import { $count, decrement, increment, reset } from '../model/store'

export const Counter = () => {
  const count = useStore($count)

  return (
    <div className="flex flex-col items-center gap-4 rounded-lg bg-white p-6 shadow-md">
      <h2 className="text-2xl font-semibold text-neutral-800">Counter</h2>
      <p className="text-4xl font-bold text-neutral-900">{count}</p>
      <div className="flex gap-2">
        <Button variant="outline" onClick={decrement} aria-label="Decrease count">
          -
        </Button>
        <Button variant="secondary" onClick={reset}>
          Reset
        </Button>
        <Button variant="outline" onClick={increment} aria-label="Increase count">
          +
        </Button>
      </div>
    </div>
  )
}
