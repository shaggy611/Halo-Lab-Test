import { useBoundStore } from '../store'
import { apiInitGame } from '../utils/apiGameInitialize'
import { useEffect } from 'react'
// import CircularProgress from '@mui/material/CircularProgress'

function GameInitializer() {
  // const id = useBoundStore((state) => state.id)
  // const token = useBoundStore((state) => state.token)
  const setToken = useBoundStore((state) => state.setToken)
  const setId = useBoundStore((state) => state.setId)
  // const loading = useBoundStore((state) => state.loading)
  const setLoading = useBoundStore((state) => state.setLoading)

  useEffect(() => {
    setLoading()

    async function initGame() {
      const { id, token } = await apiInitGame()
      setId(id)
      setToken(token)
      setLoading()
    }

    initGame()
  }, [])

  return <></>
}

export default GameInitializer
