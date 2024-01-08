import { useRef, useEffect } from 'react'

function useOutsideClick(handler: () => void, listenCapturing: boolean = true) {
  const ref = useRef<HTMLUListElement & HTMLDivElement>(null)

  useEffect(
    function () {
      function handleClick(e: Event) {
        if (ref.current && !ref.current.contains(e.target as Node)) {
          handler()
        }
      }
      document.addEventListener('click', handleClick, listenCapturing)

      return () =>
        document.removeEventListener('click', handleClick, listenCapturing)
    },
    [handler, listenCapturing]
  )

  return ref
}

export { useOutsideClick }
