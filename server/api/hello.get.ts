export default eventHandler(async (ctx) => {
  const query = getQuery(ctx)
  return `Hello ${query.name || 'World'}!`
})
