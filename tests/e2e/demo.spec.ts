/**
 * @jest-environment node
 */
const spectron = require('spectron');
const { testWithSpectron } = require('vue-cli-plugin-electron-builder')
jest.setTimeout(60000);

test('a window is created', async () => {
  const { stdout, url, stopServe, app } = await testWithSpectron(spectron)
  // stdout is the log of electron:serve
  console.log(`electron:serve returned: ${stdout}`)
  // url is the url for the dev server created with electron:serve
  console.log(`the dev server url is: ${url}`)
  // app is a spectron instance. It is attached to the dev server, launched, and waited for to load.
  expect(await app.client.getWindowCount()).toBe(1)
  // Before your tests end, make sure to stop the dev server and spectron
  await stopServe()
})