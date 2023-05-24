const COMM_API = "https://api.tvmaze.com";
export async function api(params) {
  let a = `${COMM_API}${params}`;
  let result = await fetch(a).then((res) => res.json());
  return result;
}
