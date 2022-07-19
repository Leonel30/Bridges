const url_admin = "http://localhost:5001" // http://admin.playngage.io
const API_KEY = "5125201ace5f75a905e5ff35e8bcb732"

export const Agents = {
  create: async (data, setup) => {
    data["setup_tag"] = setup ? setup : "player"
    return await call("POST", `api/agents`, null, data)
  },

  get: async (id) => { return await call("GET", `api/agents/${id}`, null, null) },

  getAgent: async (params) => { return await call("GET", `api/find_agent`, params, null) },

  getAgents: async (params) => { return await call("GET", "api/agents", params, null) },

  triggerRule: async (rule_tag, body) => { return await call("POST", `/api/rules/${rule_tag}/trigger`, null, body) },

}

export default async function call(method, endpoint, params, body) {
  const url = `${url_admin}/${endpoint}`
  console.log('url', url)
  const headers = { 'Accept': 'application/json', 'Content-Type': 'application/json', 'Authorization': "Token token=" + API_KEY }
  const opts = { method, headers, body: null }
  var built = new URL(url)
  if (method === "GET" || method === "DELETE") {
    if (params) {
      Object.keys(params).forEach(key => { if (params[key]) built.searchParams.append(key, params[key]) })
    }
  }
  if (body) opts.body = JSON.stringify(body)
  try {
    const response = await fetch(built, opts)
    const parsed = await response.json()
    console.log("parsed", parsed)
    return parsed
  } catch (err) {
    console.log("Error", err)
  }
}