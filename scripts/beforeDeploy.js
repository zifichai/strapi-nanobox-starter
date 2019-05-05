const path = require('path')
const fs = require('fs')
const yaml = require('node-yaml')
const boxfile = yaml.readSync('../boxfile.yml')
const plugins = fs.readdirSync(path.join(__dirname, '../plugins'))

boxfile['run.config'].cache_dirs = [
  ...new Set([
    ...boxfile['run.config'].cache_dirs,
    ...plugins.map((plugin) => `plugins/${plugin}/node_modules`)
  ])
]

yaml.writeSync('../boxfile.yml', boxfile)
