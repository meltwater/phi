import fs from 'fs'
import path from 'path'
import { promisify } from 'util'

import gulp from 'gulp'
import gulplog from 'gulplog'
import gulpJsonlint from 'gulp-jsonlint'
import gulpRename from 'gulp-rename'
import gulpReplace from 'gulp-replace'
import gulpStandard from 'gulp-standard'
import gulpWatch from 'gulp-watch'
import { publish as ghPagesPublish } from 'gh-pages'

const readFileAsync = promisify(fs.readFile)

const paths = {
  docs: 'docs',
  json: [
    '*.json',
    'data/**/*.json',
    'examples/**/*.json',
    'fixtures/**/*.json'
  ],
  scripts: [
    '*.js',
    'examples/**/*.js',
    'lib/**/*.js',
    'test/**/*.js'
  ]
}

export const docVersion = async () => {
  const data = await readFileAsync(
    path.resolve(__dirname, 'package.json')
  )
  const pkg = JSON.parse(data)

  return gulp.src(['.doc.index.html'])
    .pipe(gulpReplace('--version--', pkg.version))
    .pipe(gulpRename('index.html'))
    .pipe(gulp.dest(`${paths.docs}/${pkg.name}`))
}

export const publishDocs = (done) => {
  const pkg = JSON.parse(
    fs.readFileSync(path.resolve(__dirname, 'package.json'))
  )

  const docs = path.resolve(__dirname, paths.docs, pkg.name)

  ghPagesPublish(docs, {
    repo: `git@github.com:${pkg.repository}.git`,
    branch: 'gh-pages',
    add: true,
    clone: '.gh-pages',
    depth: 2,
    message: `Publish docs for v${pkg.version} [ci skip]`,
    user: {
      name: pkg.author.name,
      email: pkg.author.email
    }
  }, done)
}

gulp.task('publish-docs', ['doc-version'], (done) => {
})

export const standard = () => (
  gulp.src(paths.scripts)
    .pipe(gulpStandard())
    .pipe(gulpStandard.reporter('default', {
      breakOnError: true
    }))
)

export const jsonlint = () => (
  gulp.src(paths.json)
    .pipe(gulpJsonlint())
    .pipe(gulpJsonlint.failAfterError())
    .pipe(gulpJsonlint.reporter())
)

export const watchScripts = () => (
  gulp.src(paths.scripts)
    .pipe(gulpWatch(paths.scripts, vinyl => {
      if (vinyl.event === 'change') {
        gulplog.info(`Linted ${vinyl.relative}`)
      }
    }))
    .pipe(gulpStandard())
    .pipe(gulpStandard.reporter('default', {}))
)

export const watchJson = () => (
  gulp.src(paths.json)
    .pipe(gulpWatch(paths.json, vinyl => {
      if (vinyl.event === 'change') {
        gulplog.info(`Linted ${vinyl.relative}`)
      }
    }))
    .pipe(gulpJsonlint())
    .pipe(gulpJsonlint.reporter())
)

export const lint = gulp.parallel(
  jsonlint,
  standard
)

export const watch = gulp.parallel(
  watchJson,
  watchScripts
)

export default gulp.series(
  lint,
  watch
)