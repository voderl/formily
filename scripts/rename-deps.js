const { glob } = require('glob')
const fs = require('fs')

glob('{packages,devtools}/*/package.json', (err, files) => {
  files.forEach((file) => {
    // 将所有的 @formily/xxx 格式转换为 @voderl-formily/xxx 格式
    const content = fs.readFileSync(file, 'utf-8')
    const replaced = content.replace(
      /@formily\/([a-zA-Z0-9-_]+)/g,
      '@voderl-formily/$1'
    )
    fs.writeFileSync(file, replaced, 'utf-8')
  })
})

glob('{packages,devtools}/*/src/**/*.{ts,tsx}', (err, files) => {
  files.forEach((file) => {
    // 将所有的 @formily/xxx 格式转换为 @voderl-formily/xxx 格式
    const content = fs.readFileSync(file, 'utf-8')
    const replaced = content.replace(
      /@formily\/([a-zA-Z0-9-_]+)/g,
      '@voderl-formily/$1'
    )
    fs.writeFileSync(file, replaced, 'utf-8')
  })
})
