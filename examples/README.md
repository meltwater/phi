# Examples

## Running Examples Locally

### Local configuration

Set required and optional configuration options in `examples/local.json`, e.g.,

```json
{
  "logLevel": "debug"
}
```

Override any option with the corresponding environment variable:

- `LOG_LEVEL` (optional)

### Running examples with arguments

List all runnable examples with

```
$ yarn run example
```

Run provided examples with, e.g.,

```
$ yarn run example string | yarn run bunyan
```

or more compactly with, e.g.,

```
$ yarn example string | yarn bunyan
```

Pass arguments to examples with

```
$ yarn run example string false | yarn bunyan
```

Automatically watch and rerun an example on changes with, e.g.,

```
$ yarn run example:watch string | yarn run bunyan
```

#### Debugging examples

Debug examples with, e.g.,

```
$ yarn run example:inspect string | yarn run bunyan
```

For examples which run a single process and then exit,
create a breakpoint by adding the statement `debugger`
to the top of the example function, e.g.,

```js
export default ({log}) => async () => {
  debugger
  // ...
}
```

Automatically watch and rerun a debuggable example on changes with, e.g.,

```
$ yarn run example:inspect:watch string | yarn run bunyan
```

### Shell function aliases for running examples

In bash or zsh, you may define convenience functions for the above with

```bash
yrx () { yarn run example $@ | yarn run bunyan; }
yrxw () { yarn run example:watch $@ | yarn run bunyan; }
yrxi () { yarn run example:inspect $@ | yarn run bunyan; }
yrxiw () { yarn run example:inspect:watch $@ | yarn run bunyan; }
```

## Importing Examples as Modules

All examples are included with this package as importable modules.

_Imported examples are not supported as a stable API._

_Examples use some devDependencies
which need to be installed as dependencies
by any package which imports them._

Create and run an example with

```js
import { createExample } from '@meltwater/phi'

// createExample(exampleName, options)(...args)
createExample('string')()
  .then(data => { console.log(data) })
  .catch(err => { console.error(err) })
```

or import them directly with

```js
import createLogger from 'bunyan'
import { examples } from '@meltwater/phi'

const string = examples.string({log: createLogger()})

string()
  .then(data => { console.log(data) })
  .catch(err => { console.error(err) })
```

## Writing New Examples

1. Create a new file in `examples` or add an example to an existing file.
   Any new dependencies which are only used
   in examples should be installed as devDependencies.
   The return value of the function will be logged as `data`.
   All exported functions can take options and arguments with defaults, e.g.,

   ```js
   /* examples/query-api.js */
   import request from 'request-promise'

   export default ({
     log,
     fooApi = 'https://example.com'
   }) => async (query = 'foo', page = 1) => {
     const qs = {page: parseInt(page)}
     log.debug({query, qs})
     return request(`${fooApi}/search/${query}`, {qs})
   }
   ```

2. Import and add the example to `examples/index.js`, e.g.,

   ```js
   /* examples/index.js */
   import queryApi from './query-api'

   export const examples = {
     queryApi,
     // ...
   }
   ```

3. Add any new options to this README and in `examples/index.js`, e.g.,

   ```js
   /* examples/index.js */
   const envVars = [
     'FOO_API',
     // ...
   ]
   ```

   ````
   /* examples/README.md */
   ### Local configuration

   Set required and optional configuration options in `examples/local.json`, e.g.,

   ```json
   {
     "queryApi": "https://example.com",
     ...
   }
   ```

   Override any option with the corresponding environment variable:

   - QUERY_API
   - ...
   ````
