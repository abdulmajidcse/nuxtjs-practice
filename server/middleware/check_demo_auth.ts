export default defineEventHandler((event) => {
  const queryParams = getQuery(event);
  if (!queryParams.is_auth) {
    console.log("Server auth middleware is running!");
  }
});
