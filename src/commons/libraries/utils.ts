export const checkFileValidation = (files?: File) => {
  if (!files?.size) {
    alert('파일이 존재하지 않습니다.')
    return false
  }
  if (files.size > 10 * 1024 * 1024) {
    alert('파일 용량이 너무 큽니다.(10MB 제한)')
    return false
  }
  if (!files.type.includes('jpeg') && !files.type.includes('png')) {
    alert('파일 형식은 jpeg와 png 파일만 가능합니다.')
    return false
  }
  return true
}
