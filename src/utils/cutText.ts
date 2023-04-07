function cutPost(text: string) {
  const textResult = text.slice(0, 160)
  return `${textResult}...`
}

export const cutTexts = {
  cutPost,
}
