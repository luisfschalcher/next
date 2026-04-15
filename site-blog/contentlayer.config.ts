import { defineDocumentType, defineNestedType, makeSource } from 'contentlayer/source-files'
import { getDefinedNamedExports } from 'next/dist/build/utils'

const Author = defineNestedType(() => ({
  name: 'Author',
  fields: {
    name: {
      type: 'string',
      required: true
    },
    avatar: {
      type: 'string',
      required: true
    }
  }
}))

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.md`,
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    description: { type: 'string', required: true },
    image: { type: 'string', required: true },
    author: {
      type: 'nested',
      of: Author,
      required: true
    }
  },
  computedFields: {
    url: { type: 'string', resolve: (post) => `/posts/${post._raw.flattenedPath}` },
    slug: {
      type: 'string', resolve: (doc) => doc._raw.sourceFileName. replace('.md', '')
    }
  },
}))

export default makeSource({ contentDirPath: 'posts', documentTypes: [Post] })