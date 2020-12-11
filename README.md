# Panopticon JavaScript SDK


## Usage

### install SDK from the CLI
```bash
npm install pan-opt
```

### initialize Panopticon at the entry point of your app

```javascript
import Panopticon from "pan-opt";


Panopticon.init(dsn) // dsn: your dsn issued from panopticon.gq
```

### To set context information or send manual errors, use the exported functions of pan-opt. 

```javascript
import Panopticon from "pan-opt";

// Set user information, as well as tags and further extras
Panopticon.setTag('custom', 'Tag');
Panopticon.setTag('foo', 'bar');
Panopticon.setUser('Warden');

// Capture exceptions, send manual errors
try {
  throw new Error("Maybe I'll be caught by try-catch");
} catch (err) {
  Panopticon.send(err);
}
```