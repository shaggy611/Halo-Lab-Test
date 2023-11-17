import axios from 'axios'

const ROOT_URL: string = 'https://cave-drone-server.shtoa.xyz'

export async function apiInitGame() {
  try {
    const response = await axios.post(`${ROOT_URL}/init`, {
      name: 'Shaggy',
      complexity: 5,
    })

    const id = response.data.id

    const result = await Promise.all([
      getTokenChunk(1, id),
      getTokenChunk(2, id),
      getTokenChunk(3, id),
      getTokenChunk(4, id),
    ])

    const token = `${result[0].data.chunk}${result[1].data.chunk}${result[2].data.chunk}${result[3].data.chunk}`
    return { id, token }
  } catch (error) {
    console.log(error)
    throw error
  }
}

function getTokenChunk(chunk: number, id: string) {
  return axios.get(`${ROOT_URL}/token/${chunk}`, {
    params: {
      id: id,
    },
  })
}
