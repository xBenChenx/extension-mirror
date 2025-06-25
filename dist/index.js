gopeed.events.onResolve((ctx) => {
  let mirror = gopeed.settings.mirror || 'https://gh-proxy.com/ ';
  if (!mirror.endsWith('/')) mirror += '/';
  ctx.req.url = mirror + ctx.req.url;
});