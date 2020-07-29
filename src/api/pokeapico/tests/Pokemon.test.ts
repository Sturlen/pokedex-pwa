import PokeAPICo from ".."

let api: PokeAPICo

beforeAll(() => {
  api = new PokeAPICo()
})

describe("Fetch PokemonInfo", () => {
  it("Returns a PokemonInfo object", async () => {
    const pkmn = await api.fetchPokemonInfoById(1)
    expect(pkmn).toBeTruthy()
  })

  it("id is rounded and clamped at 1", async () => {
    const pkmn = await api.fetchPokemonInfoById(1.5)
    expect(pkmn).toBeTruthy()
    const pkmn2 = await api.fetchPokemonInfoById(-1.1)
    expect(pkmn2).toBeTruthy()
  })

  it("Throws when no pokemon exists at Id", async () => {
    expect.assertions(1)
    try {
      await api.fetchPokemonInfoById(11111)
    } catch (error) {
      expect(error).toBeTruthy()
    }
  })
})
