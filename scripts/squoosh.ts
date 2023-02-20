// From: https://web.dev/introducing-libsquoosh/
import fs from 'node:fs'
import path from 'node:path'
import minimist from 'minimist'

// @ts-ignore
import { ImagePool } from '@squoosh/lib'

const argv = minimist(process.argv.slice(2))

const isImage = (
  filePath = ''
) => {
  const extensions = new Set(['jpg', 'jpeg', 'png', 'gif', 'webp'])

  return extensions.has(path.extname(filePath).slice(1).toLowerCase())
}

const compression = async (
  filePath = ''
) => {
  const imagePool = new ImagePool()
  const image = imagePool.ingestImage(filePath)

  await image.encode({
    mozjpeg: {
      quality: 75,
    }
  })

  const { extension, binary } = await image.encodedWith.mozjpeg
  fs.writeFileSync(`${filePath}`, binary)
  console.log(`${filePath} 완료`)

  return await imagePool.close()
}

;(async () => {
  let { dirPath } = argv

  const files = fs.readdirSync(dirPath)
  for (const file of files) {
    if (isImage(file)) {
      const filePath = path.join(dirPath, file)
      await compression(filePath)
    }
  }
})()